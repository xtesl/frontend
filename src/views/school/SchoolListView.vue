<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import Card from '@/components/Card.vue';

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

// Debounce setup
let searchTimeout;
const debounce = (func, delay) => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(func, delay);
};

// Computed filtered schools with regex for flexible search
const filteredSchools = computed(() => {
  const regex = new RegExp(debouncedQuery.value, 'i'); // Case-insensitive regex
  return schools.value.filter(school => regex.test(school.name));
});

// Load more schools by appending to visibleSchools
const loadMoreSchools = async () => {
  isLoading.value = true;
  await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay

  // Calculate the range for the new schools to add based on page
  const startIndex = (currentPage.value - 1) * pageSize;
  const newSchools = filteredSchools.value.slice(startIndex, startIndex + pageSize);

  if (newSchools.length) {
    visibleSchools.value.push(...newSchools);
    currentPage.value++;
  } else {
    hasMoreSchools.value = false;
  }

  isLoading.value = false;
};

// Scroll handler
const handleScroll = () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading.value && hasMoreSchools.value) {
    loadMoreSchools();
  }
};

// Watch for search input, applying debounce
watch(searchQuery, () => {
  debounce(() => {
    debouncedQuery.value = searchQuery.value.trim();
    resetSearch();
  }, 300); // Debounce delay of 300ms
});

// Reset search-related data on new search
const resetSearch = () => {
  currentPage.value = 1;
  visibleSchools.value = [];
  hasMoreSchools.value = true;
  loadMoreSchools();
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  loadMoreSchools(); // Load initial schools
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <div class="p-6 max-w-screen-xl mx-auto">
    <h1 class="text-3xl font-semibold mb-6 text-center">Available Schools</h1>

    <div class="flex justify-center mb-6">
      <div class="flex items-center border border-gray-300 rounded-lg w-full lg:max-w-md p-2">
        <i class="pi pi-search text-gray-500 mr-2"></i>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for a school..."
          class="flex-grow outline-none text-gray-700"
        />
      </div>
    </div>

    <div class="grid gap-8 grid-cols-1 lg:grid-cols-2">
      <Card v-for="school in visibleSchools" :key="school.id" class="lg:max-w-2xl w-full">
        <template #image>
          <img :src="school.image" alt="School Image" class="w-full h-full object-cover" />
        </template>
        <template #content>
          <h2 class="text-2xl font-bold text-gray-800">{{ school.name }}</h2>
        </template>
        <template #footer>
          <div class="flex items-center justify-center md:justify-end space-x-1">
            <i v-for="n in Math.floor(school.rating)" :key="n" class="pi pi-star text-yellow-500"></i>
            <i v-if="school.rating % 1 !== 0" class="pi pi-star-half text-yellow-500"></i>
          </div>
          <span class="font-semibold block mt-1">Students: {{ school.studentsCount }}</span>
        </template>
      </Card>
    </div>

    <div v-if="isLoading" class="flex justify-center mt-6">
      <div class="animate-spin h-6 w-6 border-4 border-blue-500 rounded-full border-t-transparent"></div>
    </div>

    <div v-if="!hasMoreSchools && filteredSchools.length > 0" class="flex justify-center mt-6">
      <p class="text-gray-600">No more schools to load.</p>
    </div>
  </div>
</template>
