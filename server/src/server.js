const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173", // Your Vue frontend URL
  credentials: true, // Allow cookies
}));

const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken; // Get accessToken from cookies
    if (!token) return res.status(401).json({ message: "Access token missing" });
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid token" });
      req.user = user; // Attach user info to the request
      next();
    });
  };

// Dummy user (replace with database later)
const users = [{ email:'aimmanuel925@gmail.com', username: "testuser", password: "Asantemich024#" }];

// Generate tokens
const generateAccessToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRATION,
  });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRATION,
  });
};

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid username or password" });
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // Send tokens
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
    sameSite: "strict",
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  });

  res.json({ message: "Login successful" });
});

// Get user info
// Protected route
app.get("/user", authenticateToken, (req, res) => {
    // Return the authenticated user
    const user = users.find((user) => user.email == req.user.email)
    res.json({ user: user });
  });

// Logout route
app.post("/logout", (req, res) => {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  res.json({ message: "Logged out successfully" });
});

// Protected route
app.get("/protected", (req, res) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = jwt.verify(accessToken, process.env.JWT_SECRET);
    res.json({ message: "Access granted", user });
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
