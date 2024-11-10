<script setup>
import Card from './Card.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="py-8 bg-white">
    <div class="container-xl lg:container mx-auto px-4">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-700">Find Your Perfect Match</h1>
        <!-- <p class="text-gray-600 mt-2">
          Connecting dedicated students with employers looking for fresh skills, innovative solutions, and a passion for growth.
        </p> -->
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Student Freelancer Card -->
        <div class="bg-white rounded-lg shadow overflow-hidden flex flex-col">
          <img
            src="/img/student.jpg" 
            alt="For Student Freelancers" 
            class="w-full h-56 md:h-64 lg:h-72 object-cover"
          />
          <div class="p-6 flex-grow flex flex-col">
            <h2 class="text-2xl font-bold text-gray-800">For Student Freelancers</h2>
            <p class="mt-3 text-gray-600">
              Join a platform where your skills meet real-world demand. Start building your freelance career, gain experience, and connect with employers seeking student talent.
            </p>
            <RouterLink
              to="/jobs"
              class="inline-block mt-4 bg-secondary text-white text-center rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Explore Opportunities
            </RouterLink>
          </div>
        </div>

        <!-- Employer Card -->
        <div class="bg-white rounded-lg shadow overflow-hidden flex flex-col">
          <img
            src="/img/employers.jpg" 
            alt="For Employers" 
            class="w-full h-56 md:h-64 lg:h-72 object-cover"
          />
          <div class="p-6 flex-grow flex flex-col">
            <h2 class="text-2xl font-bold text-gray-800">For Employers</h2>
            <p class="mt-3 text-gray-600">
              Post your project and find talented students eager to contribute and innovate. Whether you're a business or an individual, find the perfect match for your vision.
            </p>
            <RouterLink
              to="/jobs/add"
              class="inline-block mt-4 bg-secondary text-center text-white rounded-lg px-4 py-2 hover:bg-green-600"
            >
              Find the Right Talent
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

