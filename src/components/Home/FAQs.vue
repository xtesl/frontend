<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>

      <div class="space-y-6">
        <!-- Question 1 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <button
            @click="toggleAnswer(1)"
            class="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
          >
            <span>What is Shelfie?</span>
            <svg
              :class="{ 'rotate-180': activeQuestion === 1 }"
              class="w-6 h-6 text-gray-500 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="activeQuestion === 1" 
            class="px-6 py-4 text-gray-600 border-t border-gray-100"
          >
            Shelfie is a platform that connects talented students with employers seeking fresh skills and innovative solutions.
          </div>
        </div>

        <!-- Question 2 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <button
            @click="toggleAnswer(2)"
            class="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
          >
            <span>How can I become a freelancer on Shelfie?</span>
            <svg
              :class="{ 'rotate-180': activeQuestion === 2 }"
              class="w-6 h-6 text-gray-500 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="activeQuestion === 2" 
            class="px-6 py-4 text-gray-600 border-t border-gray-100"
          >
            Students can create a freelancer account by signing up and completing their profile. Once approved, you can start applying for available projects.
          </div>
        </div>

        <!-- Question 3 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <button
            @click="toggleAnswer(3)"
            class="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
          >
            <span>Can I post jobs as an employer?</span>
            <svg
              :class="{ 'rotate-180': activeQuestion === 3 }"
              class="w-6 h-6 text-gray-500 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="activeQuestion === 3" 
            class="px-6 py-4 text-gray-600 border-t border-gray-100"
          >
            Yes, both businesses and individuals, including students, can post jobs on Shelfie. You can list your job and find talented freelancers to work with.
          </div>
        </div>

        <!-- Question 4 -->
        <div class="bg-white rounded-lg overflow-hidden">
          <button
            @click="toggleAnswer(4)"
            class="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
          >
            <span>Is there a fee to use Shelfie?</span>
            <svg
              :class="{ 'rotate-180': activeQuestion === 4 }"
              class="w-6 h-6 text-gray-500 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="activeQuestion === 4" 
            class="px-6 py-4 text-gray-600 border-t border-gray-100"
          >
            Shelfie charges a small commission on completed projects, both from freelancers and employers. For more details, please check our Terms of Service.
          </div>
        </div>

        <!-- Question 5 -->
        <div class="bg-white rounded-lg  overflow-hidden">
          <button
            @click="toggleAnswer(5)"
            class="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
          >
            <span>How do I get paid as a freelancer?</span>
            <svg
              :class="{ 'rotate-180': activeQuestion === 5 }"
              class="w-6 h-6 text-gray-500 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="activeQuestion === 5" 
            class="px-6 py-4 text-gray-600 border-t border-gray-100"
          >
            Freelancers are paid through the platform once the employer releases the funds. The process is safe and secure through our escrow system.
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Track the active question for toggle behavior
const activeQuestion = ref(null);

// Function to toggle the answer visibility
const toggleAnswer = (question) => {
  if (activeQuestion.value === question) {
    activeQuestion.value = null; // Close if the same question is clicked
  } else {
    activeQuestion.value = question; // Open new question
  }
};
</script>

<style scoped>
/* Base styles for smooth transitions */
.rotate-180 {
  transform: rotate(180deg);
}

/* Responsive styles */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  button {
    font-size: 1rem;
    padding: 0.75rem 1rem;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>