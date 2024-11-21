<script setup>
import PrimaryButton from './navigators/buttons/PrimaryButton.vue';
</script>

<template>
<section>
  <div class="relative h-screen md:h-auto">
    <img
      v-lazy="'https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
      class="absolute inset-0 object-cover w-full h-full"
      alt="Background image"
    />
    <div class="relative bg-gray-900 bg-opacity-75 h-full flex flex-col justify-start items-center pt-32 sm:pt-16 lg:pt-6">
      <!-- Text Section -->
      <div
        class="w-full px-4 py-6 sm:py-10 md:py-16 lg:py-36 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl
        md:px-24 lg:px-8 text-center lg:text-left"
      >
        <div class="flex flex-col items-center lg:items-start">
          <!-- Title Section -->
          <div class="max-w-lg text-left">
            <h2
              class="mb-4 sm:mb-6 font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-teal-500 via-emerald-400 to-cyan-400 text-transparent bg-clip-text stylish_font"
            >
              Empowering Students,
              <br class="hidden md:block" />
              Connecting Talent to
              <span class="bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text">Opportunity</span>
            </h2>
            <p
              class="text-base sm:text-lg md:text-xl text-gray-400 font-roboto mb-6 lg:mb-8"
            >
              Gain experience, earn income, and build your skills. We connect students to businesses and clients
              looking for quality services at affordable rates.
            </p>
            
            <!-- Button moved inside text div for large screens -->
            <div class="flex justify-start">
              <button
                class="px-4 py-3 sm:px-8 sm:py-4 border-2 border-teal-500 
                text-teal-500 hover:bg-teal-500 hover:text-white font-bold rounded-md transition duration-300 ease-in-out"
              >
                Start Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
