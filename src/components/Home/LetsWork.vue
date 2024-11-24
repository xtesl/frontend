<template>
    <div class="flex justify-center items-center mt-16 max-h-[20px] w-full bg-white p-4">
      <svg 
        viewBox="0 0 1200 600" 
        class="w-full max-w-[1100px] h-auto min-h-[400px]"
        preserveAspectRatio="xMidYMid meet"
      >
        <!-- Background fade effect -->
        <rect
          x="0"
          y="0"
          width="1200"
          height="600"
          fill="white"
          class="fade-effect"
        />
  
        <!-- Main Text -->
        <text
          x="600"
          y="250"
          text-anchor="middle"
          class="text-animate main-text"
          :style="{
            fontSize: '120px',
            fontFamily: 'Dancing Script, cursive',
            fill: 'none',
            stroke: '#14b8a6',
            strokeWidth: '3',
          }"
        >
          Let's work together
        </text>
  
        <!-- Complex Signature -->
        <path
          d="M450 350 
             c15,-20 30,-35 45,-30
             s30,22 37,30
             c15,15 30,7 45,-7
             c22,-22 37,-45 52,-52
             c30,-15 45,0 52,15
             c15,30 22,45 37,37
             c22,-7 37,-30 52,-45
             c22,-22 37,-30 52,-22
             c22,7 30,30 37,45
             c7,22 15,37 30,30
             c22,-7 37,-30 45,-45
             c15,-30 22,-37 37,-30
             c15,7 22,22 30,37
             c7,15 15,22 22,15
             c15,-15 22,-30 30,-22
             c7,7 15,22 22,30
             c7,7 15,0 22,-15
             l15,-22
             c7,-15 15,-22 22,-15
             c7,7 15,22 22,30
             c7,7 15,0 22,-15"
          class="signature-animate"
          fill="none"
          stroke="#14b8a6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
  
        <!-- Decorative underline -->
        <path
          d="M300 310 
             c150,0 600,0 600,0"
          class="underline-animate"
          fill="none"
          stroke="#14b8a6"
          stroke-width="3"
          stroke-opacity="0.3"
        />
      </svg>
    </div>
  </template>
  
  <script setup>
  // Component logic here if needed
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');
  
  .fade-effect {
    animation: fadeInOut 6s ease-in-out infinite;
  }
  
  .text-animate {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: writeText 6s ease-in-out infinite;
  }
  
  .signature-animate {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: writeSignature 6s ease-in-out infinite;
  }
  
  .underline-animate {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
    animation: writeUnderline 6s ease-in-out infinite;
  }
  
  @keyframes fadeInOut {
    0%, 100% {
      fill-opacity: 1;
    }
    40%, 60% {
      fill-opacity: 0;
    }
  }
  
  @keyframes writeText {
    0%, 100% {
      stroke-dashoffset: 1000;
      fill-opacity: 0;
    }
    40% {
      stroke-dashoffset: 0;
      fill-opacity: 0;
    }
    50%, 90% {
      stroke-dashoffset: 0;
      fill-opacity: 1;
      fill: #14b8a6;
    }
    95% {
      fill-opacity: 0;
    }
  }
  
  @keyframes writeSignature {
    0%, 45%, 100% {
      stroke-dashoffset: 2000;
    }
    65%, 90% {
      stroke-dashoffset: 0;
    }
  }
  
  @keyframes writeUnderline {
    0%, 35%, 100% {
      stroke-dashoffset: 1000;
    }
    55%, 90% {
      stroke-dashoffset: 0;
    }
  }
  
  /* Responsive adjustments with larger base sizes */
  @media (max-width: 1024px) {
    .main-text {
      font-size: 100px;
    }
  }
  
  @media (max-width: 768px) {
    .main-text {
      font-size: 80px;
    }
  }
  
  @media (max-width: 480px) {
    .main-text {
      font-size: 60px;
    }
  }
  
  /* Ensure minimum height on mobile */
  @media (max-width: 640px) {
    .min-h-[100px] {
      min-height: 350px;
    }
  }
  </style>