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
  <div class="max-w-screen-xl mx-auto px-4 pt-24 pb-8 lg:pt-28">
    <div v-if="category" class="space-y-8">
      <!-- Category Header with Image -->
      <div class="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden mb-8 shadow-lg">
        <img v-lazy="category.image" :alt="route.params.category" class="w-full h-full object-cover">
        <h1 class="absolute inset-0 bg-black/60 text-white text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center justify-center p-4
        stylish_font">
          {{ route.params.category }}
        </h1>
      </div>
      <!-- Scrollable Subcategories Section -->
      <div class="subcategories-container sm:flex sm:overflow-x-auto lg:overflow-x-auto sm:scrollbar-w-2 sm:scrollbar-thumb-gray-400 sm:scrollbar-track-gray-200 lg:scrollbar-w-2 lg:scrollbar-thumb-gray-400 lg:scrollbar-track-gray-200">
        <div
          v-for="subcategory in category.subcategories"
          :key="subcategory.name"
          class="subcategory-card sm:flex-shrink-0 lg:flex-shrink-0 sm:w-80 lg:w-80 xl:w-96 sm:mx-2 lg:mx-2"
        >
          <!-- Subcategory Image -->
          <div class="relative h-40 sm:h-48 lg:h-56">
            <img v-lazy="subcategory.image" :alt="subcategory.name" class="w-full h-full object-cover rounded-t-lg">
          </div>
          <div class="p-4">
            <!-- Subcategory Title -->
            <h2 class="text-lg sm:text-xl lg:text-2xl font-semibold mb-2">{{ subcategory.name }}</h2>
            <!-- Services List -->
            <ul class="space-y-1">
              <li v-for="service in subcategory.services" :key="service" class="text-gray-700 text-sm sm:text-base lg:text-lg">
                <RouterLink to="#" class="hover:underline">  
                  • {{ service }}
                </RouterLink> 
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- Message for Missing Category -->
    <div v-else class="text-center p-8">
      <p class="text-gray-600">Category not found.</p>
    </div>
    <div>
      <FAQs :faqs="faqs" />
    </div>
  </div>
</template>





<style scoped>
.pt-24 {
  padding-top: 6rem;
}
@media (min-width: 1024px) {
  .lg\\:pt-28 {
    padding-top: 7rem;
  }
}
.subcategories-container {
  display: flex;
  overflow-x: auto;
  padding-bottom: 1rem; /* Add some bottom padding */
}
.subcategory-card {
  background-color: white;
  border: 1px solid #e5e7eb; /* Tailwind border-gray-300 */
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  flex: 0 0 auto;
  margin-right: 1rem; /* Add space between cards */
}
.subcategory-card:hover {
  transform: scale(1.05);
}
.scrollbar-hidden {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}
</style>


