<script setup>
</script>

<template>
  <section>
    <div class="relative h-screen md:h-auto">
      <img
        v-lazy="'https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'"
        class="absolute inset-0 object-cover w-full h-full"
        alt="Background image"
      />

      <div class="relative bg-gray-900 bg-opacity-75 h-full flex flex-col justify-center items-center">
        <!-- Text Section -->
        <div
          class="w-full px-4 py-20 sm:py-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-36 text-center lg:text-left"
        >
          <div class="flex flex-col items-center lg:items-start">
            <h2
              class="max-w-lg mb-4 sm:mb-6 font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white stylish_font"
            >
              Empowering Students,
              <br class="hidden md:block" />
              Connecting Talent to
              <span class="text-teal-accent-400">Opportunity</span>
            </h2>
            <p
              class="max-w-md md:max-w-xl mb-6 sm:mb-8 text-base sm:text-lg md:text-xl text-gray-400 font-roboto"
            >
              Gain experience, earn income, and build your skills. We connect students to businesses and clients
              looking for quality services at affordable rates.
            </p>
            <a
              href="/"
              aria-label="Learn more"
              class="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-accent-400 hover:text-teal-accent-700"
            >
              Start Your Journey
              <svg class="inline-block w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path
                  d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Search Bar Section -->
        <div class="w-full max-w-xl p-4 sm:p-6 bg-transparent bg-opacity-75 rounded-lg mx-4 md:mx-8 lg:mt-10">
          <form class="flex">
            <input
              type="text"
              class="flex-grow h-12 sm:h-14 px-4 bg-transparent border-2 border-teal-accent-400 rounded-l appearance-none text-white placeholder-gray-300 focus:border-secondary focus:outline-none focus:shadow-outline"
              placeholder="Search for any service"
            />
            <button
              type="submit"
              class="w-12 sm:w-14 h-12 sm:h-14 text-white bg-teal-accent-400 rounded-r shadow-sm hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
            >
              <svg class="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M10 2a8 8 0 1 0 5.29 14.29l4.71 4.7a1 1 0 0 0 1.42-1.42l-4.7-4.71A8 8 0 0 0 10 2zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12z"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
