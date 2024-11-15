<script setup>
import { ref, defineProps } from 'vue';

// Define the props that the component will accept
const props = defineProps({
  faqs: {
    type: Array,
    required: true
  }
});

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



<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>

      <div class="space-y-6">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="bg-white rounded-lg overflow-hidden"
        >
          <button
            @click="toggleAnswer(index)"
            class="w-full flex items-center justify-between px-6 py-4 text-lg font-semibold text-gray-800 bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200"
          >
            <span>{{ faq.question }}</span>
            <svg
              :class="{ 'rotate-180': activeQuestion === index }"
              class="w-6 h-6 text-gray-500 transition-transform duration-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <div 
            v-show="activeQuestion === index" 
            class="px-6 py-4 text-gray-600 border-t border-gray-100"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


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
