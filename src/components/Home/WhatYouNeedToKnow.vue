<template>
   <section class="py-16 bg-white">
  <div class="container-xl mx-auto px-4 sm:px-6">
    <!-- Gradient Card with Adjusted Width and Responsive Design -->
    <div class="max-w-full sm:max-w-md lg:max-w-4xl mx-auto bg-gradient-to-r from-teal-500 via-blue-500 to-teal-600 rounded-lg shadow-lg p-6 sm:p-8">
      <!-- Heading -->
      <h2 class="text-2xl sm:text-3xl font-bold text-white mb-4 leading-tight">
        What You Need to Know About Shelfie
      </h2>
      <!-- Description -->
      <p class="text-base sm:text-lg text-white mb-6 leading-relaxed">
        Shelfie is a unique platform that connects talented students with employers looking for fresh skills and innovative solutions.
        Whether you're a student seeking freelance opportunities or an employer searching for the right talent, Shelfie is the place for you.
      </p>
      <!-- Learn More Link -->
      <RouterLink
        to="/about"
        class="inline-block bg-white text-teal-600 font-semibold rounded-lg px-6 py-3 hover:bg-gray-100 transition duration-300"
      >
        Learn More
      </RouterLink>
    </div>
  </div>
</section>
  </template>
  
  <script setup>
  // No script needed for this simple section
  </script>
  
  <style scoped>
  /* Optional: Add shadow and smooth hover effect */
  .bg-gradient-to-r {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .bg-gradient-to-r:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  /* Adjustments for smaller screens */
  @media (max-width: 640px) {
    .bg-gradient-to-r {
      padding: 1.5rem; /* Reduce padding for smaller screens */
      margin-left: 1rem;
      margin-right: 1rem; /* Ensure there is space between card and edge of screen */
    }
  
    h2 {
      font-size: 1.25rem; /* Decrease heading size */
    }
  
    p {
      font-size: 0.875rem; /* Decrease paragraph text size */
    }
  
    .inline-block {
      padding: 8px 12px; /* Adjust button padding */
    }
  
    .max-w-md {
      max-width: 90%; /* Reduce max-width of card on smaller devices */
    }
  }
  
  @media (max-width: 480px) {
    .bg-gradient-to-r {
      padding: 1rem; /* Reduce padding further on extra small screens */
      margin-left: 0.5rem;
      margin-right: 0.5rem; /* Ensure space on very small devices */
    }
  
    h2 {
      font-size: 1rem; /* Further reduce heading size */
    }
  
    p {
      font-size: 0.75rem; /* Further reduce paragraph text size */
    }
  
    .max-w-md {
      max-width: 85%; /* Reduce max-width more on very small screens */
    }
  }
  </style>
  