<script setup>
import { ref, computed } from 'vue'

const portfolioItems = ref([
  {
    id: 1,
    title: 'Modern E-commerce Website',
    category: 'Web Development',
    freelancer: 'Sarah Chen',
    rating: 4.9,
    image: 'https://themefisher.com/blog/flipmart.webp',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Cartoon work',
    category: 'Graphic Design',
    freelancer: 'Michael Ross',
    rating: 5.0,
    image: 'https://cdn.svgator.com/images/2024/10/neon-style-graphic-design-girl-illustration.png',
    tags: ['Branding', 'Logo Design', 'Identity']
  },
  {
    id: 3,
    title: 'Mobile App UI/UX',
    category: 'UI/UX Design',
    freelancer: 'Emma Watson',
    rating: 4.8,
    image: 'https://img.freepik.com/free-vector/various-screens-violet-public-transport-mobile-app_23-2148704862.jpg',
    tags: ['Figma', 'Mobile Design', 'UI/UX']
  },
  
  {
    id: 4,
    title: '3D design',
    category: '3D Design',
    freelancer: 'Lisa Wong',
    rating: 5.0,
    image: 'data:image/jpeg;base64,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',
    tags: ['3D Modeling', 'Animation', 'Rendering']
  },
  {
    id: 5,
    title: 'Custom WordPress Theme',
    category: 'Web Development',
    freelancer: 'Alex Kumar',
    rating: 4.7,
    image: 'https://oceanwp.org/wp-content/uploads/2021/09/wordpress-template-startup-1.png',
    tags: ['WordPress', 'PHP', 'Custom Theme']
  },
])

const selectedCategory = ref('All')
const categories = ['All', 'Web Development', 'Graphic Design', 'UI/UX Design', 'Digital Marketing', '3D Design']

const filteredPortfolio = computed(() => {
  if (selectedCategory.value === 'All') return portfolioItems.value
  return portfolioItems.value.filter(item => item.category === selectedCategory.value)
})
</script>

<template>
  <div class="w-full relative">
    <section class="w-full py-16 sm:py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <!-- Background Elements -->
      <div class="absolute inset-0">
        <div class="w-full h-full grid-pattern opacity-20"></div>
      </div>

      <div class="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12 sm:mb-16">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight glow-text">
            Featured Work
          </h2>
          <p class="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            Discover exceptional projects completed by our talented freelancers. 
            From web development to graphic design, our community delivers outstanding results.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="selectedCategory = category"
            :class="[
              'px-4 py-2 rounded-full text-sm sm:text-base transition-all duration-300',
              selectedCategory === category 
                ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/25' 
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Portfolio Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div v-for="item in filteredPortfolio" 
               :key="item.id"
               class="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm
                      border border-gray-700/50 transition-all duration-500
                      hover:shadow-xl hover:shadow-teal-500/10">
            
            <!-- Project Image -->
            <div class="relative aspect-[4/3] overflow-hidden">
              <img :src="item.image" 
                   :alt="item.title"
                   class="w-full h-full object-cover transition-transform duration-500
                          group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <!-- Project Info -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <span class="text-teal-400 text-sm">{{ item.category }}</span>
                <div class="flex items-center">
                  <span class="text-yellow-400">⭐</span>
                  <span class="text-white ml-1">{{ item.rating }}</span>
                </div>
              </div>
              
              <h3 class="text-xl font-semibold text-white mb-2">{{ item.title }}</h3>
              
              <div class="flex items-center mb-4">
                <span class="text-gray-400 text-sm">by</span>
                <span class="text-white text-sm ml-2">{{ item.freelancer }}</span>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in item.tags" 
                      :key="tag"
                      class="text-xs px-2 py-1 rounded-full bg-gray-700/50 text-gray-300">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- View More Button -->
        <div class="text-center mt-12">
          <button class="relative overflow-hidden px-8 py-3 rounded-full font-semibold
                       bg-teal-500 text-white transition-all duration-300 
                       hover:shadow-xl hover:shadow-teal-500/20
                       group">
            <span class="relative z-10">View More Projects</span>
            <div class="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600
                        transform scale-x-0 group-hover:scale-x-100 
                        transition-transform duration-500 origin-left"></div>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.grid-pattern {
  background-image: 
    linear-gradient(to right, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(20, 184, 166, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
}

.glow-text {
  text-shadow: 0 0 20px rgba(20, 184, 166, 0.5);
}

/* Ensure proper containment */
section {
  position: relative;
  z-index: 1;
  overflow: visible;
}

/* Reduce animation intensity */
.group:hover {
  transform: translateY(-2px);
}

@media (max-width: 640px) {
  .grid-pattern {
    background-size: 20px 20px;
  }
}
</style>