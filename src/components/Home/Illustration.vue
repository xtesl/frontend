<script setup>
import { ref } from 'vue'

const freelancerSteps = ref([
  {
    id: 1,
    icon: '👤',
    title: 'Create Account',
    description: 'Sign up and complete your basic profile information to join our community.',
    duration: '5 mins'
  },
  {
    id: 2,
    icon: '🔒',
    title: 'Get Verified',
    description: 'Complete our verification process to build trust with potential clients.',
    duration: '24 hours'
  },
  {
    id: 3,
    icon: '💼',
    title: 'Build Portfolio',
    description: 'Showcase your best work and highlight your skills to stand out.',
    duration: '30 mins'
  },
  {
    id: 4,
    icon: '🎯',
    title: 'Start Bidding',
    description: 'Apply to relevant projects and start connecting with clients.',
    duration: 'Ongoing'
  },
  {
    id: 5,
    icon: '💰',
    title: 'Earn & Grow',
    description: 'Complete projects, earn money, and build your reputation.',
    duration: 'Ongoing'
  }
])

const employerSteps = ref([
  {
    id: 1,
    icon: '🏢',
    title: 'Business Account',
    description: 'Create your company profile and verify your business details.',
    duration: '10 mins'
  },
  {
    id: 2,
    icon: '📋',
    title: 'Post Project',
    description: 'Describe your project needs, budget, and requirements clearly.',
    duration: '15 mins'
  },
  {
    id: 3,
    icon: '👥',
    title: 'Review Proposals',
    description: 'Evaluate freelancer proposals and portfolios to find the perfect match.',
    duration: 'Varies'
  },
  {
    id: 4,
    icon: '🤝',
    title: 'Collaborate',
    description: 'Work with talented freelancers using our secure platform.',
    duration: 'Project-based'
  },
  {
    id: 5,
    icon: '⭐',
    title: 'Review & Repeat',
    description: 'Rate your experience and build long-term relationships.',
    duration: 'Ongoing'
  }
])

const activeTab = ref('freelancer')
const hoverStep = ref(null)
</script>

<template>
  <div class="relative w-full bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.1),transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(20,184,166,0.1),transparent_50%)]"></div>
      
      <!-- Animated dots -->
      <div class="absolute inset-0" aria-hidden="true">
        <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight glow-text">
          Your Journey Starts Here
        </h2>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">
          Whether you're a talented freelancer or an employer seeking expertise,
          we've made the process simple and efficient.
        </p>
      </div>

      <!-- Toggle Tabs -->
      <div class="flex justify-center mb-16">
        <div class="inline-flex p-1 rounded-full bg-gray-800/50 backdrop-blur-sm">
          <button
            v-for="tab in ['freelancer', 'employer']"
            :key="tab"
            @click="activeTab = tab"
            :class="[
              'px-6 py-3 rounded-full text-sm font-medium transition-all duration-300',
              activeTab === tab
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25'
                : 'text-gray-400 hover:text-white'
            ]"
          >
            {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
          </button>
        </div>
      </div>

      <!-- Journey Steps -->
      <div class="relative">
        <!-- Freelancer Journey -->
        <TransitionGroup
          name="journey"
          tag="div"
          class="grid gap-6 md:grid-cols-5"
        >
          <div
            v-if="activeTab === 'freelancer'"
            v-for="(step, index) in freelancerSteps"
            :key="step.id"
            @mouseenter="hoverStep = step.id"
            @mouseleave="hoverStep = null"
            class="relative group"
          >
            <!-- Card -->
            <div
              class="relative h-full p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                     transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10
                     hover:border-teal-500/50 hover:bg-gray-800/80"
            >
              <!-- Step Number -->
              <div class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                {{ index + 1 }}
              </div>

              <!-- Content -->
              <div class="pt-4">
                <div class="text-3xl mb-4">{{ step.icon }}</div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ step.title }}</h3>
                <p class="text-gray-400 mb-4">{{ step.description }}</p>
                <div class="text-sm text-teal-400">Estimated time: {{ step.duration }}</div>
              </div>

              <!-- Connector Line -->
              <div
                v-if="index < freelancerSteps.length - 1"
                class="hidden md:block absolute top-1/2 -right-12 w-24 h-[2px] bg-gradient-to-r from-teal-500/50 to-transparent"
              ></div>
            </div>
          </div>
        </TransitionGroup>

        <!-- Employer Journey -->
        <TransitionGroup
          name="journey"
          tag="div"
          class="grid gap-6 md:grid-cols-5"
        >
          <div
            v-if="activeTab === 'employer'"
            v-for="(step, index) in employerSteps"
            :key="step.id"
            @mouseenter="hoverStep = step.id"
            @mouseleave="hoverStep = null"
            class="relative group"
          >
            <!-- Card -->
            <div
              class="relative h-full p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50
                     transition-all duration-500 hover:shadow-xl hover:shadow-teal-500/10
                     hover:border-teal-500/50 hover:bg-gray-800/80"
            >
              <!-- Step Number -->
              <div class="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
                {{ index + 1 }}
              </div>

              <!-- Content -->
              <div class="pt-4">
                <div class="text-3xl mb-4">{{ step.icon }}</div>
                <h3 class="text-xl font-semibold text-white mb-2">{{ step.title }}</h3>
                <p class="text-gray-400 mb-4">{{ step.description }}</p>
                <div class="text-sm text-teal-400">Estimated time: {{ step.duration }}</div>
              </div>

              <!-- Connector Line -->
              <div
                v-if="index < employerSteps.length - 1"
                class="hidden md:block absolute top-1/2 -right-12 w-24 h-[2px] bg-gradient-to-r from-teal-500/50 to-transparent"
              ></div>
            </div>
          </div>
        </TransitionGroup>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <button class="relative overflow-hidden px-8 py-4 rounded-full font-semibold
                     bg-teal-500 text-white transition-all duration-300 
                     hover:shadow-xl hover:shadow-teal-500/20
                     group">
          <span class="relative z-10">Get Started Now</span>
          <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600
                      transform scale-x-0 group-hover:scale-x-100 
                      transition-transform duration-500 origin-left"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: 
    radial-gradient(circle, rgba(20, 184, 166, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
  animation: patternFloat 20s linear infinite;
}

@keyframes patternFloat {
  0% { background-position: 0 0; }
  100% { background-position: 40px 40px; }
}

.glow-text {
  text-shadow: 0 0 30px rgba(20, 184, 166, 0.5);
}

/* Journey transitions */
.journey-enter-active,
.journey-leave-active {
  transition: all 0.5s ease;
}

.journey-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.journey-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

/* Ensure items maintain their position during transitions */
.journey-move {
  transition: transform 0.5s ease;
}

@media (max-width: 768px) {
  .bg-grid-pattern {
    background-size: 20px 20px;
  }
}
</style>