<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const stats = ref([
  {
    count: 0,
    target: 25000,
    label: 'Active Students',
    icon: '👩‍🎓',
  },
  {
    count: 0,
    target: 15000,
    label: 'Businesses',
    icon: '🏢',
  },
  {
    count: 0,
    target: 50000,
    label: 'Completed Projects',
    icon: '✅',
  },
  {
    count: 0,
    target: 95,
    suffix: '%',
    label: 'Satisfaction Rate',
    icon: '⭐',
  }
])

const animateNumbers = () => {
  stats.value.forEach((stat) => {
    gsap.to(stat, {
      count: stat.target,
      duration: 2.5,
      ease: 'power2.out',
      onUpdate: () => {
        stat.count = Math.round(stat.count)
      }
    })
  })
}

onMounted(() => {
  animateNumbers()
})
</script>

<template>
  <section class="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <!-- Floating circles - reduced number for mobile -->
      <div v-for="i in 10" :key="i" 
           class="circle-animation absolute rounded-full bg-teal-500/10"
           :style="{
             width: `${Math.random() * 200 + 50}px`,
             height: `${Math.random() * 200 + 50}px`,
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`,
             animationDelay: `${Math.random() * 5}s`,
             animationDuration: `${Math.random() * 10 + 10}s`
           }">
      </div>
      
      <!-- Animated grid -->
      <div class="absolute inset-0 grid-pattern"></div>
    </div>

    <div class="relative mx-auto px-4 sm:px-6 lg:px-8 max-w-[90rem]">
      <!-- Main Content -->
      <div class="text-center mb-10 sm:mb-16">
        <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight glow-text px-4">
          Join Our Thriving Community
        </h2>
        <p class="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4">
          Connect with thousands of talented students and businesses on our platform.
          Turn your skills into opportunities and bring your projects to life.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
        <div v-for="(stat, index) in stats" 
             :key="index"
             class="relative group">
          <div class="stat-card relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 
                      bg-gray-800/50 backdrop-blur-lg border border-teal-500/20 
                      transform transition-all duration-500 hover:scale-105 hover:bg-gray-800/70">
            <div class="card-glow absolute inset-0 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-500"></div>
            <div class="relative flex flex-col items-center justify-center text-center">
              <span class="text-3xl sm:text-4xl mb-3">{{ stat.icon }}</span>
              <h3 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                {{ Math.round(stat.count).toLocaleString() }}{{ stat.suffix || '' }}
              </h3>
              <p class="text-sm sm:text-base md:text-lg text-teal-300">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="text-center mt-10 sm:mt-16 px-4">
        <button class="relative overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full 
                     font-semibold text-base sm:text-lg bg-teal-500 text-white 
                     transform transition-all duration-300 hover:scale-105 
                     hover:shadow-xl hover:shadow-teal-500/20 group">
          <span class="relative z-10">Get Started Today</span>
          <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600
                      transform scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-500 origin-left"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-pattern {
  background-image: linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                    linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: patternMove 20s linear infinite;
}

.circle-animation {
  animation: floatAround linear infinite;
}

.card-glow {
  background: radial-gradient(circle at center, rgba(20, 184, 166, 0.2) 0%, transparent 70%);
}

.glow-text {
  text-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
  animation: glowPulse 3s ease-in-out infinite;
}

.stat-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, transparent, rgba(20, 184, 166, 0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.7s;
}

.stat-card:hover::before {
  transform: translateX(100%);
}

@keyframes patternMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(50px); }
}

@keyframes floatAround {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 0.1;
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
    opacity: 0.3;
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
    opacity: 0.2;
  }
  100% {
    transform: translate(0, 0) scale(1);
    opacity: 0.1;
  }
}

@keyframes glowPulse {
  0%, 100% {
    text-shadow: 0 0 20px rgba(20, 184, 166, 0.3);
  }
  50% {
    text-shadow: 0 0 30px rgba(20, 184, 166, 0.6);
  }
}

/* Ensure text remains readable on small screens */
@media (max-width: 640px) {
  .stat-card {
    backdrop-filter: blur(10px);
  }
  
  .circle-animation {
    opacity: 0.05;
  }
}
</style>