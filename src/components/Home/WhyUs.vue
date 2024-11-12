<script setup>
import { RouterLink } from 'vue-router';
import Card from '../Card.vue';
</script>
<template>
  <section class="py-16 bg-white">
    <div class="container-xl lg:container mx-auto text-center">
      <h1 class="text-3xl font-bold text-gray-700 mb-8">Why Choose Shelfie?</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <!-- Reason 1 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="/img/students.webp"
            alt="Access to Student Talent"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-xl font-bold text-gray-800">Access to Student Talent</h2>
            <p class="mt-3 text-gray-600">
              Employers can tap into a pool of highly skilled and motivated student freelancers eager to work and learn.
            </p>
          </div>
        </div>

        <!-- Reason 2 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="/img/student_working.jpg"
            alt="Real-World Experience for Students"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-xl font-bold text-gray-800">Real-World Experience for Students</h2>
            <p class="mt-3 text-gray-600">
              Students gain practical, hands-on experience by working on real projects with employers who value their skills.
            </p>
          </div>
        </div>

        <!-- Reason 3 -->
        <div class="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://www.teledataict.com/media/2021/11/Tech20Changes20Business.jpeg"
            alt="Affordable & Flexible Work"
            class="w-full h-48 object-cover"
          />
          <div class="p-6">
            <h2 class="text-xl font-bold text-gray-800">Affordable & Flexible Work</h2>
            <p class="mt-3 text-gray-600">
              Employers can find cost-effective solutions for their projects, while students enjoy flexible work arrangements.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
