<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import FAQs from '@/components/Home/FAQs.vue';
import { RouterLink } from 'vue-router';

const data = {
  "Programming and Tech": {
    image: "https://www.tertiarycourses.com.gh/media/catalog/category/blockchain-ibf-sts-courses.png",
    subcategories: [
      {
        name: "Web Development",
        image: "https://images.surferseo.art/9602bc4b-cfc4-410e-b291-611d478c9d6a.png",
        services: ["Frontend Development", "Backend Development", "Full-Stack Development"]
      },
      {
        name: "Mobile Development",
        image: "https://www.binaryfolks.com/media/blog/Reasons%20to%20build%20a%20mobile%20app/4428861.png",
        services: ["iOS Development", "Android Development", "Cross-Platform Development"]
      },
      {
        name: "Software Development",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0LEkxU5VGYajYy2bGBkPc5QAy2afN2NjCg&s",
        services: [
"Software Development",
"AI Development",
"APIs & Integrations",
"Scripting",
"Plugins Development"
]
      },
      // {
//         name: "Software Development",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0LEkxU5VGYajYy2bGBkPc5QAy2afN2NjCg&s",
//         services: [
// "Software Development",
// "AI Development",
// "APIs & Integrations",
// "Scripting",
// "Plugins Development"
// ]
//       },
//       {
//         name: "Software Development",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-0LEkxU5VGYajYy2bGBkPc5QAy2afN2NjCg&s",
//         services: [
// "Software Development",
// "AI Development",
// "APIs & Integrations",
// "Scripting",
// "Plugins Development"
// ]
//       },
    ]
  },
  "Creative and Design": {
    image: 'https://wallpapers.com/images/hd/graphic-design-background-xo7nmgrv4ag28kt0.jpg',
    subcategories: [
      {
        name: "Graphic Design",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJyqTDZF5Rl2xPbXKhxeVIeOtdENL4j2iyg&s",
        services: ["Logo Design", "Branding", "Illustration"]
      },
      {
        name: "UI/UX Design",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSysfjLLa7cJnCDfJRBL48zqmHujG2nyFzFVQ&s",
        services: ["User Interface Design", "User Experience Design"]
      }
    ]
  }
};

const faqs = [ { question: "What is Shelfie?", 
answer: "Shelfie is a platform that connects talented students with employers seeking fresh skills and innovative solutions." }, 
{ question: "How can I become a freelancer on Shelfie?", 
answer: "Students can create a freelancer account by signing up and completing their profile. Once approved, you can start applying for available projects." }, 
{ question: "Can I post jobs as an employer?", 
answer: "Yes, both businesses and individuals, including students, can post jobs on Shelfie. You can list your job and find talented freelancers to work with." }, 
{ question: "Is there a fee to use Shelfie?", 
answer: "Shelfie charges a small commission on completed projects, both from freelancers and employers. For more details, please check our Terms of Service." },
 { question: "How do I get paid as a freelancer?", 
 answer: "Freelancers are paid through the platform once the employer releases the funds. The process is safe and secure through our escrow system." } ];

const route = useRoute();
const category = ref(null);

onMounted(() => {
  const categoryName = route.params.category;
  category.value = data[categoryName] || null;
});
</script>


<template>
  <div>
    <!-- Full-Width Hero Section -->
    <div class="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <img 
        v-lazy="category.image" 
        :alt="route.params.category" 
        class="absolute inset-0 w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-teal-500/60 flex items-center justify-center">
        <h1 class="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center px-4 stylish_font tracking-wide">
          {{ route.params.category }}
        </h1>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-screen-xl mx-auto px-4 py-12 md:py-16 space-y-10">
      <div v-if="category">
        <!-- Scrollable Subcategories Section -->
        <div class="subcategories-container">
          <div 
            class="flex overflow-x-auto space-x-6 pb-6"
          >
            <div
              v-for="subcategory in category.subcategories"
              :key="subcategory.name"
              class="subcategory-card flex-shrink-0 w-80 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <!-- Subcategory Image -->
              <div class="relative h-56 overflow-hidden rounded-t-xl">
                <img 
                  v-lazy="subcategory.image" 
                  :alt="subcategory.name" 
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                >
              </div>
              
              <!-- Subcategory Content -->
              <div class="p-5 space-y-3">
                <h2 class="text-2xl font-bold text-teal-600 tracking-tight">
                  {{ subcategory.name }}
                </h2>
                <ul class="space-y-2">
                  <li 
                    v-for="service in subcategory.services" 
                    :key="service" 
                    class="text-gray-700 text-base"
                  >
                    <RouterLink 
                      to="#" 
                      class="hover:text-teal-500 hover:underline transition-colors duration-200 flex items-center"
                    >
                      <span class="mr-2 text-teal-500">•</span>
                      {{ service }}
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- No Category Found Message -->
      <div v-else class="text-center p-8">
        <p class="text-gray-600 text-xl">Category not found.</p>
      </div>

      <!-- FAQs Section -->
      <div>
        <FAQs :faqs="faqs" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Scrollbar Styling */
.subcategories-container {
  scrollbar-width: thin;
  scrollbar-color: theme('colors.teal.500') theme('colors.gray.200');
}

.subcategories-container::-webkit-scrollbar {
  height: 8px;
}

.subcategories-container::-webkit-scrollbar-track {
  background: theme('colors.gray.200');
}

.subcategories-container::-webkit-scrollbar-thumb {
  background-color: theme('colors.teal.500');
  border-radius: 20px;
}

/* Prevent text wrapping issues */
.subcategory-card {
  min-width: 300px;
}
</style>