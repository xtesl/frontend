<template>
  <div class="w-full bg-gradient-to-r from-white via-teal-50 to-white py-12 relative overflow-hidden">
    <!-- Header -->
    <div class="text-center mb-12 px-4">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
        Participating Institutions
      </h2>
      <div class="w-40 h-1 bg-teal-500 mx-auto"></div>
    </div>

    <!-- Logos Scroll Container -->
    <div class="relative w-full">
      <div class="logos-slide flex">
        <div 
          v-for="(university, index) in universities" 
          :key="index"
          class="flex-shrink-0 mx-4 md:mx-6 lg:mx-8 transform transition-transform duration-300 hover:scale-110"
        >
          <div class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center p-4">
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
</template>

<script setup>
const universities = [
  {
    name: 'UENR',
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
.logos-slide {
  display: flex;
  width: max-content;
  animation: scroll 40s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Pause animation on hover */
.logos-slide:hover {
  animation-play-state: paused;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .logos-slide {
    animation-duration: 35s;
  }
}

@media (max-width: 768px) {
  .logos-slide {
    animation-duration: 30s;
  }
}

@media (max-width: 640px) {
  .logos-slide {
    animation-duration: 25s;
  }
}
</style>