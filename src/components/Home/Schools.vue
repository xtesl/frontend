<template>
    <div class="w-full bg-gradient-to-r from-white via-teal-50 to-white py-12 relative">
      <!-- Gradient Overlays to show direction -->
      <div class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <!-- Header -->
      <div class="text-center mb-12 px-4">
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-serif">
          Participating Institutions
        </h2>
        <div class="w-40 h-1 bg-teal-500 mx-auto"></div>
      </div>
  
      <!-- Directional Indicators -->
      <div class="hidden md:flex justify-between items-center absolute top-1/2 w-full px-8 z-20 pointer-events-none">
        <div class="text-teal-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        <div class="text-teal-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
  
      <!-- Logos Scroll Container -->
      <div class="overflow-hidden w-full relative">
        <div class="relative whitespace-nowrap logo-scroll-container">
          <!-- First set of logos -->
          <div class="inline-block whitespace-nowrap logo-scroll">
            <div 
              v-for="(university, index) in universities" 
              :key="`uni-1-${index}`"
              class="inline-flex items-center justify-center mx-6 md:mx-8 lg:mx-12 hover:scale-110 transition-transform duration-300"
            >
              <div class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4 relative">
                <div class="text-center">
                  <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2">
                    <svg :viewBox="university.viewBox" class="w-full h-full" fill="#14b8a6">
                      <path :d="university.logo" />
                    </svg>
                  </div>
                  <span class="block text-xs md:text-sm lg:text-base font-semibold text-gray-800 whitespace-normal text-center w-20 md:w-28 lg:w-32">
                    {{ university.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Duplicated set -->
          <div class="inline-block whitespace-nowrap logo-scroll">
            <div 
              v-for="(university, index) in universities" 
              :key="`uni-2-${index}`"
              class="inline-flex items-center justify-center mx-6 md:mx-8 lg:mx-12 hover:scale-110 transition-transform duration-300"
            >
              <div class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4">
                <div class="text-center">
                  <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2">
                    <svg :viewBox="university.viewBox" class="w-full h-full" fill="#14b8a6">
                      <path :d="university.logo" />
                    </svg>
                  </div>
                  <span class="block text-xs md:text-sm lg:text-base font-semibold text-gray-800 whitespace-normal text-center w-20 md:w-28 lg:w-32">
                    {{ university.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const universities = [
    {
      name: 'Harvard University',
      viewBox: '0 0 24 24',
      logo: 'M12 2L2 6v2h20V6L12 2zm-1 12H9v-2h2v2zm0-3H9V9h2v2zm0-3H9V6h2v2zm3 6h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm3 6h-2v-2h2v2zm0-3h-2V9h2v2zm0-3h-2V6h2v2zm2 7H5v9h14v-9z'
    },
    {
      name: 'MIT',
      viewBox: '0 0 24 24',
      logo: 'M3 3v18h18V3H3zm16 16H5V5h14v14z M8 7h8v2H8V7z M8 11h8v2H8v-2z M8 15h8v2H8v-2z'
    },
    {
      name: 'Stanford',
      viewBox: '0 0 24 24',
      logo: 'M12 2L2 6v2.5L12 4l10 4.5V6L12 2zm0 6L2 12v2.5L12 10l10 4.5V12L12 8zm0 6L2 18v4h20v-4L12 14z'
    },
    {
      name: 'Oxford',
      viewBox: '0 0 24 24',
      logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'
    },
    {
      name: 'Cambridge',
      viewBox: '0 0 24 24',
      logo: 'M12 2L2 7v9.5L12 22l10-5.5V7L12 2zm0 18l-7-3.8v-7L12 5l7 4.2v7L12 20z'
    },
    {
      name: 'Yale',
      viewBox: '0 0 24 24',
      logo: 'M12 2L2 6v2h20V6L12 2zm0 4l8 3v12l-8 3-8-3V9l8-3z'
    },
    {
      name: 'Princeton',
      viewBox: '0 0 24 24',
      logo: 'M12 2L2 7v10l10 5 10-5V7L12 2zm0 18l-7-3.5v-7L12 6l7 3.5v7L12 20z'
    },
    {
      name: 'Berkeley',
      viewBox: '0 0 24 24',
      logo: 'M12 2L2 7v9.5L12 22l10-5.5V7L12 2zm0 16l-6-3.3V10l6 3.3 6-3.3v4.7L12 18z'
    }
  ];
  </script>
  
  <style scoped>
  .logo-scroll-container {
    display: inline-block;
    will-change: transform;
    animation: scroll 40s linear infinite;
  }
  
  .logo-scroll {
    animation: none;
  }
  
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  
  /* Pause animation on hover */
  .logo-scroll-container:hover {
    animation-play-state: paused;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1024px) {
    .logo-scroll-container {
      animation-duration: 35s;
    }
  }
  
  @media (max-width: 768px) {
    .logo-scroll-container {
      animation-duration: 30s;
    }
  }
  
  @media (max-width: 640px) {
    .logo-scroll-container {
      animation-duration: 25s;
    }
  }
  
  /* Custom animation for pulsing arrows */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  </style>