<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  faqs: {
    type: Array,
    required: true
  }
});

const activeQuestion = ref(null);

const toggleAnswer = (question) => {
  if (activeQuestion.value === question) {
    activeQuestion.value = null;
  } else {
    activeQuestion.value = question;
  }
};
</script>

<template>
  <section class="py-20 bg-gradient-to-b from-white to-teal-50" data-aos="fade-left">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
        <div class="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="max-w-3xl mx-auto space-y-4">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="bg-white rounded-xl shadow-sm border border-teal-100 hover:border-teal-200 transition-all duration-300"
        >
          <button
            @click="toggleAnswer(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-xl"
            :class="{ 'text-teal-500': activeQuestion === index }"
          >
            <span class="text-lg font-semibold pr-8">{{ faq.question }}</span>
            <div 
              class="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center transition-all duration-300"
              :class="{ 'bg-teal-500': activeQuestion === index }"
            >
              <svg
                :class="{ 
                  'rotate-180 text-white': activeQuestion === index,
                  'text-teal-500': activeQuestion !== index
                }"
                class="w-5 h-5 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          <div 
            v-show="activeQuestion === index"
            class="overflow-hidden transition-all duration-300"
          >
            <div class="px-6 pb-6 text-gray-600 leading-relaxed border-t border-teal-50 pt-4">
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.overflow-hidden > div {
  animation: slideDown 0.3s ease-out;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  h1 {
    font-size: 1.875rem;
  }
  
  button {
    padding: 1rem;
  }
  
  button span {
    font-size: 1rem;
  }
}
</style>