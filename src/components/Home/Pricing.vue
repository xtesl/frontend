<template>
  <div class="relative max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
    <!-- Background decoration -->
    <div class="absolute inset-0 bg-gradient-to-br from-teal-50 to-white -skew-y-3 transform origin-top-left"></div>
    
    <!-- Floating shapes -->
    <div class="absolute top-0 left-0 w-32 h-32 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 will-change-transform"></div>
    <div class="absolute top-0 right-0 w-32 h-32 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 will-change-transform"></div>
    <div class="absolute -bottom-8 left-20 w-32 h-32 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 will-change-transform"></div>

    <div class="relative">
      <!-- Header section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700">
            Choose Your Path
          </span>
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Start for free or unlock premium features to boost your freelancing journey
        </p>
      </div>

      <!-- Toggle switch -->
      <div class="flex justify-center items-center gap-4 mb-12">
        <span :class="{ 'text-teal-600 font-semibold': !isYearly }">Monthly</span>
        <button 
          @click="toggleBilling"
          class="relative w-16 h-8 flex items-center bg-teal-500 rounded-full p-1 cursor-pointer"
          :class="{ 'bg-teal-600': isYearly }"
        >
          <div 
            class="w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"
            :class="{ 'translate-x-8': isYearly }"
          ></div>
        </button>
        <span :class="{ 'text-teal-600 font-semibold': isYearly }">
          Yearly
          <span class="text-sm text-teal-500 ml-1">(Save 20%)</span>
        </span>
      </div>

      <!-- Pricing cards -->
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
        <!-- Basic Plan -->
        <div 
          class="group relative bg-white rounded-3xl shadow-xl p-8 transition-transform duration-300"
          :class="{ 'ring-4 ring-teal-400': selectedPlan === 'basic' }"
          @click="selectedPlan = 'basic'"
        >
          <div class="absolute -top-5 left-1/2 transform -translate-x-1/2">
            <span class="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Most Popular
            </span>
          </div>

          <div class="relative">
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Basic Plan</h3>
            <div class="flex items-baseline mb-8">
              <span class="text-5xl font-extrabold text-gray-900">$0</span>
              <span class="text-gray-600 ml-2">/month</span>
            </div>

            <ul class="space-y-5 mb-8">
              <li class="flex items-center space-x-3 text-gray-600">
                <svg class="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>5 active projects</span>
              </li>
              <li class="flex items-center space-x-3 text-gray-600">
                <svg class="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Basic profile customization</span>
              </li>
              <li class="flex items-center space-x-3 text-gray-600">
                <svg class="w-6 h-6 text-teal-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Community support</span>
              </li>
            </ul>

            <button 
              class="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold
                     transform transition-all duration-300 hover:shadow-xl hover:from-teal-600 hover:to-teal-700
                     focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              Get Started Free
            </button>
          </div>
        </div>

        <!-- Pro Plan -->
        <div 
          class="group relative rounded-3xl p-8 transition-transform duration-300"
          :class="[
            { 'ring-4 ring-teal-400': selectedPlan === 'pro' },
            'bg-gradient-to-br from-teal-500 to-teal-700'
          ]"
          @click="selectedPlan = 'pro'"
        >
          <div class="absolute inset-0 bg-white opacity-[0.03] rounded-3xl"></div>
          <div class="relative">
            <h3 class="text-2xl font-bold text-white mb-4">Pro Plan</h3>
            <div class="flex items-baseline mb-8">
              <span class="text-5xl font-extrabold text-white">
                {{ isYearly ? '$279' : '$29' }}
              </span>
              <span class="text-teal-100 ml-2">/{{ isYearly ? 'year' : 'month' }}</span>
            </div>

            <ul class="space-y-5 mb-8">
              <li class="flex items-center space-x-3 text-white">
                <svg class="w-6 h-6 text-teal-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Unlimited active projects</span>
              </li>
              <li class="flex items-center space-x-3 text-white">
                <svg class="w-6 h-6 text-teal-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Advanced profile with portfolio</span>
              </li>
              <li class="flex items-center space-x-3 text-white">
                <svg class="w-6 h-6 text-teal-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Priority support 24/7</span>
              </li>
              <li class="flex items-center space-x-3 text-white">
                <svg class="w-6 h-6 text-teal-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Featured profile listing</span>
              </li>
              <li class="flex items-center space-x-3 text-white">
                <svg class="w-6 h-6 text-teal-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Advanced analytics dashboard</span>
              </li>
            </ul>

            <button 
              class="w-full py-4 px-6 rounded-xl bg-white text-teal-600 font-semibold
                     transform transition-all duration-300 hover:shadow-xl hover:bg-teal-50
                     focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            >
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedPlan = ref('basic')
const isYearly = ref(false)

const toggleBilling = () => {
  isYearly.value = !isYearly.value
}
</script>

<style scoped>
.will-change-transform {
  transform: translateZ(0);
}
</style>