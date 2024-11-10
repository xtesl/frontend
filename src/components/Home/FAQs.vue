<template>
    <section class="py-16 bg-white">
      <div class="container-xl lg:container mx-auto text-left">
        <h1 class="text-3xl font-bold text-gray-700 mb-8">FAQs</h1>
  
        <div class="space-y-6">
          <!-- Question 1 -->
          <div class="flex items-center justify-between bg-white rounded-lg overflow-hidden">
            <button
              @click="toggleAnswer(1)"
              class="w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              What is Shelfie?
            </button>
            <span 
              :class="{'rotate-180': activeQuestion === 1}" 
              class="transition-transform cursor-pointer mr-4"
            >
              &#x21f5;
            </span>
          </div>
          <div v-show="activeQuestion === 1" class="px-6 py-4 text-gray-600">
            Shelfie is a platform that connects talented students with employers seeking fresh skills and innovative solutions.
          </div>
  
          <!-- Question 2 -->
          <div class="flex items-center justify-between bg-white rounded-lg overflow-hidden">
            <button
              @click="toggleAnswer(2)"
              class="w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              How can I become a freelancer on Shelfie?
            </button>
            <span 
              :class="{'rotate-180': activeQuestion === 2}" 
              class="transition-transform cursor-pointer mr-4"
            >
              &#x21f5;
            </span>
          </div>
          <div v-show="activeQuestion === 2" class="px-6 py-4 text-gray-600">
            Students can create a freelancer account by signing up and completing their profile. Once approved, you can start applying for available projects.
          </div>
  
          <!-- Question 3 -->
          <div class="flex items-center justify-between bg-white rounded-lg overflow-hidden">
            <button
              @click="toggleAnswer(3)"
              class="w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              Can I post jobs as an employer?
            </button>
            <span 
              :class="{'rotate-180': activeQuestion === 3}" 
              class="transition-transform cursor-pointer mr-4"
            >
              &#x21f5;
            </span>
          </div>
          <div v-show="activeQuestion === 3" class="px-6 py-4 text-gray-600">
            Yes, both businesses and individuals, including students, can post jobs on Shelfie. You can list your job and find talented freelancers to work with.
          </div>
  
          <!-- Question 4 -->
          <div class="flex items-center justify-between bg-white rounded-lg overflow-hidden">
            <button
              @click="toggleAnswer(4)"
              class="w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              Is there a fee to use Shelfie?
            </button>
            <span 
              :class="{'rotate-180': activeQuestion === 4}" 
              class="transition-transform cursor-pointer mr-4"
            >
              &#x21f5;
            </span>
          </div>
          <div v-show="activeQuestion === 4" class="px-6 py-4 text-gray-600">
            Shelfie charges a small commission on completed projects, both from freelancers and employers. For more details, please check our Terms of Service.
          </div>
  
          <!-- Question 5 -->
          <div class="flex items-center justify-between bg-white rounded-lg overflow-hidden">
            <button
              @click="toggleAnswer(5)"
              class="w-full text-left px-6 py-4 text-lg font-semibold text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              How do I get paid as a freelancer?
            </button>
            <span 
              :class="{'rotate-180': activeQuestion === 5}" 
              class="transition-transform cursor-pointer mr-4"
            >
              &#x21f5;
            </span>
          </div>
          <div v-show="activeQuestion === 5" class="px-6 py-4 text-gray-600">
            Freelancers are paid through the platform once the employer releases the funds. The process is safe and secure through our escrow system.
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
  /* Optional: Add transition to make the answer appear smoothly */
  button {
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #e2e8f0;
  }
  
  span {
    font-size: 24px;
  }
  </style>
  