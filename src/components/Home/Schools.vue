<template>
  <div class="w-full bg-gradient-to-r from-white via-teal-50 to-white py-12 relative">
    <!-- Gradient Overlays to show direction -->
    <div class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
    <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
    
    <!-- Header -->
    <div class="text-center mb-12 px-4">
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 font-serif">
        In-Demand Tech Skills
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
            v-for="(skill, index) in skills" 
            :key="`skill-1-${index}`"
            class="inline-flex items-center justify-center mx-6 md:mx-8 lg:mx-12 hover:scale-110 transition-transform duration-300"
          >
            <div class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4 relative">
              <div class="text-center">
                <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2">
                  <svg :viewBox="skill.viewBox" class="w-full h-full" :fill="skill.color">
                    <path :d="skill.logo" />
                  </svg>
                </div>
                <span class="block text-xs md:text-sm lg:text-base font-semibold text-gray-800 whitespace-normal text-center w-20 md:w-28 lg:w-32">
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Duplicated set -->
        <div class="inline-block whitespace-nowrap logo-scroll">
          <div 
            v-for="(skill, index) in skills" 
            :key="`skill-2-${index}`"
            class="inline-flex items-center justify-center mx-6 md:mx-8 lg:mx-12 hover:scale-110 transition-transform duration-300"
          >
            <div class="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center p-4">
              <div class="text-center">
                <div class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-2">
                  <svg :viewBox="skill.viewBox" class="w-full h-full" :fill="skill.color">
                    <path :d="skill.logo" />
                  </svg>
                </div>
                <span class="block text-xs md:text-sm lg:text-base font-semibold text-gray-800 whitespace-normal text-center w-20 md:w-28 lg:w-32">
                  {{ skill.name }}
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
const skills = [
  {
    name: 'Python Programming',
    viewBox: '0 0 24 24',
    color: '#3776AB',
    logo: 'M14.25 2.25h-4.5c-1.24 0-2.25 1.01-2.25 2.25v3h-3c-1.24 0-2.25 1.01-2.25 2.25v4.5c0 1.24 1.01 2.25 2.25 2.25h3v3c0 1.24 1.01 2.25 2.25 2.25h4.5c1.24 0 2.25-1.01 2.25-2.25v-3h3c1.24 0 2.25-1.01 2.25-2.25v-4.5c0-1.24-1.01-2.25-2.25-2.25h-3v-3c0-1.24-1.01-2.25-2.25-2.25zm0 15h-4.5v-4.5h-4.5v-4.5h4.5v-4.5h4.5v4.5h4.5v4.5h-4.5v4.5z'
  },
  {
    name: 'React Development',
    viewBox: '0 0 24 24',
    color: '#61DAFB',
    logo: 'M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1.04-.84 1.88-1.87 1.88-1.04 0-1.88-.84-1.88-1.88 0-1.05.84-1.89 1.88-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-1.21-.82-2.63-.82-4.3 0-1.67.3-3.09.82-4.3-1.59-1.5-2.97-2.08-3.6-1.7-.63.38-.66 1.52-.37 3.07.12.8.37 1.75.67 2.67-.3.92-.55 1.87-.67 2.67-.29 1.55-.26 2.69.37 3.07M20.63 20c-.63.38-2.01-.2-3.6-1.7.52-1.21.82-2.63.82-4.3 0-1.67-.3-3.09-.82-4.3 1.59-1.5 2.97-2.08 3.6-1.7.63.38.66 1.52.37 3.07-.12.8-.37 1.75-.67 2.67.3.92.55 1.87.67 2.67.29 1.55.26 2.69-.37 3.07M12 9.04c.67 0 1.22.55 1.22 1.22 0 .68-.55 1.22-1.22 1.22-.68 0-1.22-.54-1.22-1.22 0-.67.54-1.22 1.22-1.22m0 5.93c.67 0 1.22.55 1.22 1.22s-.55 1.22-1.22 1.22c-.68 0-1.22-.55-1.22-1.22s.54-1.22 1.22-1.22z'
  },
  {
    name: 'Machine Learning',
    viewBox: '0 0 24 24',
    color: '#FF6F61',
    logo: 'M17 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10zm-5 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'
  },
  {
    name: 'Cloud Computing',
    viewBox: '0 0 24 24',
    color: '#4285F4',
    logo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-3v3H9v-3H6v-3h3V9h3v3h3v3z'
  },
  {
    name: 'Data Science',
    viewBox: '0 0 24 24',
    color: '#F9A03C',
    logo: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2v-6h2v6zm-2-8V6h2v3h-2z'
  },
  {
    name: 'TypeScript',
    viewBox: '0 0 24 24',
    color: '#3178C6',
    logo: 'M3 3h18v18H3V3zm11.5 7.5v-1h-6v1H11v5h1.5v-5h2zM14.5 14h1.25L15 9.5h-1.5l-1.75 4.5h1.25l.375-1h1.5L14.5 14zm-1.625-1.625l.525-1.5.525 1.5h-1.05z'
  },
  {
    name: 'Cybersecurity',
    viewBox: '0 0 24 24',
    color: '#FF4500',
    logo: 'M12 2L1 21h22L12 2zm0 15.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-4.5h-3v-6h3v6z'
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