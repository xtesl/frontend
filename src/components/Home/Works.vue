<script setup>
import { ref, computed } from 'vue'

const portfolioItems = ref([
  {
    id: 1,
    title: 'Modern E-commerce Website',
    category: 'Web Development',
    freelancer: 'Sarah Chen',
    rating: 4.9,
    image: '/api/placeholder/600/400',
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
    image: '/api/placeholder/600/400',
    tags: ['Figma', 'Mobile Design', 'UI/UX']
  },
  {
    id: 4,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    freelancer: 'John Martinez',
    rating: 4.9,
    image: '/api/placeholder/600/400',
    tags: ['Marketing', 'Social Media', 'Content']
  },
  {
    id: 5,
    title: '3D design',
    category: '3D Design',
    freelancer: 'Lisa Wong',
    rating: 5.0,
    image: '/api/placeholder/600/400',
    tags: ['3D Modeling', 'Animation', 'Rendering']
  },
  {
    id: 6,
    title: 'Custom WordPress Theme',
    category: 'Web Development',
    freelancer: 'Alex Kumar',
    rating: 4.7,
    image: '',
    tags: ['WordPress', 'PHP', 'Custom Theme']
  }, {

    id: 7,

  }
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