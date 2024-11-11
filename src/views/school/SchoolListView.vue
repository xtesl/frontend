<script setup>
import { ref, computed } from 'vue';
import Card from '@/components/Card.vue';

const schools = [
    { id: 1, name: "University of Ghana", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqOVFtx7JYH7b8A2jub1GxGnimcQObB_WmZg&s", rating: 4.7, studentsCount: 1500 },
    { id: 2, name: "Kwame Nkrumah University", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCh2CpVCzlrdp7jEg0YfaK_EnktZeTMs6qaA&s", rating: 4.5, studentsCount: 1300 },
    { id: 3, name: "University of Energy and Natural Resources", image: "https://www.gepaghana.org/import/wp-content/uploads/sites/2/2019/08/UENR-Logo.jpg", rating: 5, studentsCount: 500 },
    { id: 4, name: "University of Cape Coast", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWj7wneoCZEEgwSxBnM9L6I5f4JubiMRAtiA&s", rating: 4.5, studentsCount: 1000 },
    { id: 5, name: "University of Mines and Technology", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8DgZ_xjNR6Grj2KvXEVOGh4JR9VWhv0jyA&s", rating: 4, studentsCount: 2000 },
    { id: 6, name: "University for Development Studies", image: "https://www.uds.edu.gh/favicon.ico", rating: 4, studentsCount: 2000 }
];

const searchQuery = ref('');
const page = ref(1);
const itemsPerPage = 4;

const filteredSchools = computed(() => {
    const query = searchQuery.value.toLowerCase();
    return schools.filter(school => school.name.toLowerCase().includes(query));
});

const paginatedSchools = computed(() => {
    const start = (page.value - 1) * itemsPerPage;
    return filteredSchools.value.slice(start, start + itemsPerPage);
});

const nextPage = () => {
    if ((page.value * itemsPerPage) < filteredSchools.value.length) {
        page.value++;
    }
};

const previousPage = () => {
    if (page.value > 1) {
        page.value--;
    }
};
</script>

<template>
    <div class="p-6 max-w-screen-xl mx-auto">
        <h1 class="text-3xl font-semibold mb-6 text-center">Available Schools</h1>
        
        <!-- Responsive Search bar with icon -->
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
        
        <!-- Responsive Grid Layout with larger spacing on larger screens -->
        <div class="grid gap-8 grid-cols-1 lg:grid-cols-2">
            <Card v-for="school in paginatedSchools" :key="school.id" class="lg:max-w-2xl w-full">
                <!-- Image Slot -->
                <template #image>
                    <img :src="school.image" alt="School Image" class="w-full h-full object-cover" />
                </template>

                <!-- Content Slot with Title and Adjusted Font Sizes -->
                <template #content>
                    <h2 class="text-2xl font-bold text-gray-800">{{ school.name }}</h2>
                </template>

                <!-- Footer Slot with Star Rating and Button -->
                <template #footer>
                    <div class="flex items-center justify-center md:justify-end space-x-1">
                        <i v-for="n in Math.floor(school.rating)" :key="n" class="pi pi-star text-yellow-500"></i>
                        <i v-if="school.rating % 1 !== 0" class="pi pi-star-half text-yellow-500"></i>
                    </div>
                    <span class="font-semibold block mt-1">Students: {{ school.studentsCount }}</span>
                </template>
            </Card>
        </div>

        <!-- Pagination Controls for Previous and Next -->
        <div class="flex justify-center mt-6 space-x-4">
            <button 
                @click="previousPage" 
                :disabled="page === 1" 
                class="px-4 py-2 bg-gray-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Previous
            </button>
            <button 
                @click="nextPage" 
                :disabled="page * itemsPerPage >= filteredSchools.length" 
                class="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
            </button>
        </div>
    </div>
</template>

<style scoped>
/* Make the search bar responsive and center-aligned */
@media (max-width: 640px) {
    .search-bar-container {
        width: 100%;
        padding: 0 1rem;
    }
}
</style>
