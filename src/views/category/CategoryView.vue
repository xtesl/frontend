<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const data = {
  "Programming and Tech": {
    image: 'https://example.com/programming-tech.jpg',
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
      }
    ]
  },
  "Creative and Design": {
    image: 'https://example.com/creative-design.jpg',
    subcategories: [
      {
        name: "Graphic Design",
        image: "https://example.com/graphic-design.jpg",
        services: ["Logo Design", "Branding", "Illustration"]
      },
      {
        name: "UI/UX Design",
        image: "https://example.com/ui-ux-design.jpg",
        services: ["User Interface Design", "User Experience Design"]
      }
    ]
  }
};

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
        <img src="https://www.tertiarycourses.com.gh/media/catalog/category/blockchain-ibf-sts-courses.png" :alt="route.params.category" class="w-full h-full object-cover">
        <h1 class="absolute inset-0 bg-black/60 text-white text-2xl sm:text-3xl lg:text-4xl font-bold flex items-center justify-center p-4">
          {{ route.params.category }}
        </h1>
      </div>

      <!-- Subcategories and Services with Full-Width Cards on Smaller Screens -->
      <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div 
          v-for="subcategory in category.subcategories" 
          :key="subcategory.name" 
          class="bg-white border rounded-lg overflow-hidden transition-transform hover:scale-105"
        >
          <!-- Subcategory Image with Responsive Height -->
          <div class="relative h-40 sm:h-48 md:h-52 lg:h-56">
            <img :src="subcategory.image" :alt="subcategory.name" class="w-full h-full object-cover rounded-t-lg">
          </div>
          <div class="p-4">
            <!-- Subcategory Title -->
            <h2 class="text-lg sm:text-xl font-semibold mb-2">{{ subcategory.name }}</h2>
            <!-- Services List -->
            <ul class="space-y-1">
              <li v-for="service in subcategory.services" :key="service" class="text-gray-700 text-sm sm:text-base">
                • {{ service }}
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

/* Hover effects for smooth scaling */
.transition-transform {
  transition: transform 0.2s ease-in-out;
}

</style>
