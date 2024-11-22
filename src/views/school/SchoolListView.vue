<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import Card from '@/components/Card.vue';
import { useIntersectionObserver } from '@vueuse/core';

const schools = ref([
  { id: 1, name: "University of Ghana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqOVFtx7JYH7b8A2jub1GxGnimcQObB_WmZg&s", rating: 4.7, studentsCount: 1500 },
  { id: 2, name: "Kwame Nkrumah University", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh2CpVCzlrdp7jEg0YfaK_EnktZeTMs6qaA&s", rating: 4.5, studentsCount: 1300 },
  { id: 3, name: "University of Energy and Natural Resources", image: "https://www.gepaghana.org/import/wp-content/uploads/sites/2/2019/08/UENR-Logo.jpg", rating: 5, studentsCount: 500 },
  { id: 4, name: "University of Cape Coast", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWj7wneoCZEEgwSxBnM9L6I5f4JubiMRAtiA&s", rating: 4.5, studentsCount: 1000 },
  { id: 5, name: "University of Mines and Technology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8DgZ_xjNR6Grj2KvXEVOGh4JR9VWhv0jyA&s", rating: 4, studentsCount: 2000 },
  { id: 6, name: "University of Development Studies", image: "https://www.uds.edu.gh/favicon.ico", rating: 4, studentsCount: 2000 }
]);

const searchQuery = ref('');
const debouncedQuery = ref('');
const pageSize = 4;
const isLoading = ref(false);
const hasMoreSchools = ref(true);
const visibleSchools = ref([]);
const currentPage = ref(1);
const loadTriggerRef = ref(null);

// Debounce implementation
const debounce = (fn, delay) => {
  let timeoutId = null;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Computed filtered schools
const filteredSchools = computed(() => {
  const query = debouncedQuery.value.toLowerCase();
  if (!query) return schools.value;
  
  return schools.value.filter(school => 
    school.name.toLowerCase().includes(query)
  );
});

// Load more schools
const loadMoreSchools = async () => {
  if (isLoading.value || !hasMoreSchools.value) return;
  
  isLoading.value = true;
  await new Promise(resolve => setTimeout(resolve, 500));

  const startIndex = (currentPage.value - 1) * pageSize;
  const newSchools = filteredSchools.value.slice(startIndex, startIndex + pageSize);

  if (newSchools.length) {
    visibleSchools.value.push(...newSchools);
    currentPage.value++;
    hasMoreSchools.value = visibleSchools.value.length < filteredSchools.value.length;
  } else {
    hasMoreSchools.value = false;
  }

  isLoading.value = false;
};

// Handle search
const handleSearch = debounce(() => {
  debouncedQuery.value = searchQuery.value.trim();
  resetSearch();
}, 300);

watch(searchQuery, handleSearch);

const resetSearch = () => {
  currentPage.value = 1;
  visibleSchools.value = [];
  hasMoreSchools.value = true;
  loadMoreSchools();
};

// Setup intersection observer
useIntersectionObserver(loadTriggerRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    loadMoreSchools();
  }
});

const handleImageError = (event) => {
  event.target.src = '/path-to-fallback-image.jpg'; // Add a fallback image path
};

onMounted(() => {
  loadMoreSchools();
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-teal-50 to-white mt-10">
    <div class="p-4 sm:p-8 lg:p-8 max-w-7xl mx-auto">
      <!-- Header section -->
      <div class="mb-8 mt-8 text-center">
        <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Discover Your Perfect University
        </h1>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Explore Ghana's top educational institutions and find the perfect match for your academic journey
        </p>
      </div>

      <!-- Search section -->
      <div class="flex justify-center mb-8">
        <div class="relative w-full max-w-xl">
          <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <i class="pi pi-search text-gray-400"></i>
          </div>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search for universities..."
            class="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 outline-none"
          />
        </div>
      </div>

      <!-- Modified Schools Grid -->
      <div class="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div 
          v-for="school in visibleSchools" 
          :key="school.id"
          class="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
        >
          <div class="flex flex-col h-full">
            <!-- Responsive Image -->
            <div class="relative w-full h-48 bg-gray-100">
  <img 
    :src="school.image" 
    :alt="school.name"
    class="w-full h-full object-contain" 
    loading="lazy"
    @error="handleImageError"
  />
</div>

            <!-- Content -->
            <div class="p-6 flex-1">
              <h2 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{{ school.name }}</h2>
              
              <div class="flex flex-wrap items-center justify-between gap-4">
                <!-- Rating -->
                <div class="flex items-center">
                  <div class="flex">
                    <i 
                      v-for="n in Math.floor(school.rating)" 
                      :key="n" 
                      class="pi pi-star-fill text-yellow-400 text-sm"
                    ></i>
                    <i 
                      v-if="school.rating % 1 !== 0" 
                      class="pi pi-star text-yellow-400 text-sm"
                    ></i>
                  </div>
                  <span class="ml-2 text-gray-600 text-sm">({{ school.rating }})</span>
                </div>

                <!-- Students Count -->
                <div class="flex items-center text-teal-600 text-sm">
                  <i class="pi pi-users mr-2"></i>
                  <span>{{ school.studentsCount.toLocaleString() }} Students</span>
                </div>
              </div>
            </div>

            <!-- Read More Button -->
            <div class="p-4 bg-gray-50 text-center">
              <button
                class="px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 transition"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Loading Trigger -->
      <div 
        ref="loadTriggerRef"
        class="h-10 flex items-center justify-center"
      >
        <div v-if="isLoading" class="flex items-center space-x-2">
          <div class="w-2 h-2 bg-teal-500 rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
          <div class="w-2 h-2 bg-teal-500 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
        </div>
        <p v-else-if="!hasMoreSchools" class="text-gray-500 text-sm">
          {{ visibleSchools.length ? 'No more schools to load' : 'No schools found' }}
        </p>
      </div>
    </div>
  </div>
</template>


<style scoped>
/* Previous styles remain */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Loading animation */
@keyframes pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

.animate-bounce {
  animation: bounce 0.6s infinite;
}

/* Fix for PrimeIcons */
.pi {
  font-size: 1rem;
}
</style>