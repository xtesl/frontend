<template>
  <div class="min-h-screen mt-16 bg-white p-4 sm:p-6">
   <BreadCrumb :crumbs="breadcrumbs"/>

    <header class="mb-6 sm:mb-8 flex flex-col stylish_font">
  <!-- Title and Description -->
  <div class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full">
    <div>
      <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Freelance Projects</h1>
      <p class="text-gray-600 flex items-center gap-2">
        <span class="inline-flex items-center justify-center w-2 h-2 bg-teal-500 rounded-full"></span>
        {{ totalJobs }} available opportunities
      </p>
    </div>
  </div>

  <!-- Search Bar and Filter Section -->
  <div class="mt-4 sm:mt-6 flex flex-wrap items-center gap-3">
    <!-- Search Bar -->
    <div class="flex-grow relative mb-3 sm:mb-0">
      <div class="flex items-center bg-white border border-gray-200 px-4 py-2.5 rounded-lg shadow-sm transition-all duration-200 focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500">
        <svg class="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          v-model="searchQuery"
          class="w-full bg-transparent text-sm text-gray-700 border-none focus:outline-none placeholder-gray-400"
          placeholder="Search for projects or freelancers..."
        />
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <!-- Categories Button -->
      <div class="relative">
        <button
          @click="toggleCategoryDropdown"
          class="flex items-center px-4 py-2.5 text-sm font-medium bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
        >
          <svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
          Categories
          <svg class="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          v-if="showCategoryDropdown"
          class="absolute mt-2 bg-white shadow-lg rounded-lg p-2 w-48 z-50 border border-gray-100 right-0"
        >
          <button
            v-for="category in categories"
            :key="category"
            @click="selectCategory(category)"
            class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 rounded-md transition-colors"
          >
            {{ category }}
            <svg v-if="selectedCategory === category" class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Sort By Button -->
      <div class="relative">
        <button
          @click="toggleSortDropdown"
          class="flex items-center px-4 py-2.5 text-sm font-medium bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
        >
          <svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
          </svg>
          Sort By
          <svg class="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          v-if="showSortDropdown"
          class="absolute mt-2 bg-white shadow-lg rounded-lg p-2 w-48 z-50 border border-gray-100 right-0"
        >
          <button
            v-for="option in sortOptions"
            :key="option"
            @click="applySort(option)"
            class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 rounded-md transition-colors"
          >
            {{ option }}
            <svg v-if="selectedSort === option" class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Budget Button -->
      <div class="relative">
        <button
          @click="toggleBudgetDropdown"
          class="flex items-center px-4 py-2.5 text-sm font-medium bg-teal-500 text-white rounded-lg shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200"
        >
          <svg class="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Budget
          <svg class="w-4 h-4 text-white ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          v-if="showBudgetDropdown"
          class="absolute mt-2 bg-white shadow-lg rounded-lg p-4 w-64 z-50 border border-gray-100 right-0"
        >
          <div class="mb-4">
            <label for="min-budget" class="block text-sm font-medium text-gray-700 mb-1">Min Budget</label>
            <input
              v-model="minBudget"
              type="number"
              id="min-budget"
              class="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none transition-colors"
              placeholder="e.g., 50"
            />
          </div>
          <div class="mb-4">
            <label for="max-budget" class="block text-sm font-medium text-gray-700 mb-1">Max Budget</label>
            <input
              v-model="maxBudget"
              type="number"
              id="max-budget"
              class="w-full px-3 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500 focus:outline-none transition-colors"
              placeholder="e.g., 500"
            />
          </div>
          <button
            @click="applyBudgetFilter"
            class="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200"
          >
            Apply
          </button>
        </div>
      </div>

      <!-- Delivery Time Button -->
      <div class="relative">
        <button
          @click="toggleDeliveryDropdown"
          class="flex items-center px-4 py-2.5 text-sm font-medium bg-white text-gray-700 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
        >
          <svg class="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Delivery Time
          <svg class="w-4 h-4 text-gray-500 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          v-if="showDeliveryDropdown"
          class="absolute mt-2 bg-white shadow-lg rounded-lg p-2 w-48 z-50 border border-gray-100 right-0"
        >
          <button
            v-for="option in deliveryOptions"
            :key="option"
            @click="selectDeliveryOption(option)"
            class="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 rounded-md transition-colors"
          >
            {{ option }}
            <svg v-if="selectedDeliveryOption === option" class="w-4 h-4 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
          <button
            @click="applyDeliveryFilter"
            class="w-full mt-2 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 border-b border-gray-200"></div>
</header>

<!-- Project Cards Container -->
<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" ref="jobContainer">
  <div v-for="job in jobs" :key="job.id" 
    @click="handleJobClick(job.id)"
    class="bg-white rounded-xl transition-all duration-300 border border-gray-100 hover:shadow-lg hover:border-teal-500/20 cursor-pointer">
    <!-- Project Header -->
    <div class="p-4 sm:p-6 border-b border-gray-100">
      <div class="flex justify-between items-start gap-4 mb-4">
        <h2 class="text-lg sm:text-xl font-bold text-gray-800 hover:text-teal-500 transition-colors">
          {{ job.title }}
        </h2>
        <div class="flex-shrink-0">
          <span 
            :class="[
              'px-2 sm:px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap',
              job.projectStatus === 'Open' ? 'bg-teal-50 text-teal-600' : 'bg-yellow-50 text-yellow-600'
            ]"
          >
            {{ job.projectStatus }}
          </span>
        </div>
      </div>

      <!-- Budget and Timeline -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 text-sm">
        <div class="flex items-center space-x-2 text-gray-600">
          <span class="text-teal-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span class="font-medium">{{ job.budget }}</span>
        </div>
        <div class="flex items-center space-x-2 text-gray-600">
          <span class="text-teal-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <span class="font-medium">{{ job.duration }}</span>
        </div>
        <div class="flex items-center space-x-2 text-gray-600">
          <span class="text-teal-500">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          <span class="font-medium">{{ formatDate(job.postedDate) }}</span>
        </div>
      </div>

      <!-- Project Description -->
      <p class="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{{ job.description }}</p>

      <!-- Skills Required -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span 
          v-for="skill in job.skills" 
          :key="skill"
          class="px-2 sm:px-3 py-1 bg-teal-50 text-teal-600 rounded-full text-xs sm:text-sm font-medium hover:bg-teal-100 transition-colors"
        >
          {{ skill }}
        </span>
      </div>
    </div>

    <!-- Project Stats and Client Info -->
    <div class="p-4 sm:px-6 bg-gray-50/50 rounded-b-xl">
      <!-- Desktop Layout -->
      <div class="hidden sm:flex items-center justify-between">
        <!-- Client Info -->
        <div class="flex items-center space-x-3">
          <div class="relative flex-shrink-0">
            <img 
              :src="job.client.avatar" 
              :alt="job.client.name" 
              class="w-10 h-10 rounded-full border-2 border-white object-cover"
            >
            <span 
              :class="[
                'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white',
                job.client.isOnline ? 'bg-teal-400' : 'bg-gray-300'
              ]"
            ></span>
          </div>
          <div class="min-w-0">
            <div class="flex items-center space-x-1">
              <p class="text-sm font-medium text-gray-800 truncate">{{ job.client.name }}</p>
              <span v-if="job.client.isVerified" class="flex-shrink-0 text-teal-500">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </span>
            </div>
            <div class="flex items-center space-x-1 text-sm text-gray-600">
              <span class="flex items-center">
                <span>{{ job.client.rating }}</span>
                <span class="text-teal-400 ml-0.5">★</span>
              </span>
              <span>•</span>
              <span class="whitespace-nowrap">${{ job.client.totalSpent }}k+ spent</span>
            </div>
          </div>
        </div>

        <!-- Project Stats -->
        <div class="flex items-center">
          <div class="text-center bg-white px-6 py-2 rounded-lg shadow-sm border border-gray-100">
            <p class="text-sm font-medium text-gray-600">Proposals</p>
            <p class="text-lg font-semibold text-teal-600">{{ job.proposals }}</p>
          </div>
        </div>
      </div>

      <!-- Mobile Layout -->
      <div class="sm:hidden flex flex-col space-y-4">
        <!-- Client Info -->
        <div class="flex items-center space-x-3">
          <div class="relative flex-shrink-0">
            <img 
              :src="job.client.avatar" 
              :alt="job.client.name" 
              class="w-10 h-10 rounded-full border-2 border-white object-cover"
            >
            <span 
              :class="[
                'absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white',
                job.client.isOnline ? 'bg-teal-400' : 'bg-gray-300'
              ]"
            ></span>
          </div>
          <div class="min-w-0 flex-1">
            <div class="flex items-center space-x-1">
              <p class="text-sm font-medium text-gray-800 truncate">{{ job.client.name }}</p>
              <span v-if="job.client.isVerified" class="flex-shrink-0 text-teal-500">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                </svg>
              </span>
            </div>
            <div class="flex items-center space-x-1 text-sm text-gray-600">
              <span class="flex items-center">
                <span>{{ job.client.rating }}</span>
                <span class="text-teal-400 ml-0.5">★</span>
              </span>
              <span>•</span>
              <span>${{ job.client.totalSpent }}k+ spent</span>
            </div>
          </div>
        </div>

        <!-- Project Stats -->
        <div class="flex items-center justify-between">
          <div class="text-center bg-white px-6 py-2 rounded-lg shadow-sm border border-gray-100">
            <p class="text-sm font-medium text-gray-600">Proposals</p>
            <p class="text-lg font-semibold text-teal-600">{{ job.proposals }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Loading and End States -->
<div class="col-span-full mt-8 text-center">
  <div v-if="loading" class="flex justify-center p-4">
    <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
  </div>
  <div v-else-if="noMoreJobs" class="text-gray-600 p-4">
    <div class="flex flex-col items-center space-y-2">
      <span class="text-4xl">🎯</span>
      <p class="font-medium">You've reached the end!</p>
      <p class="text-sm">No more projects available</p>
    </div>
  </div>
  </div>
</div>
</template>



<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router';
import BreadCrumb from '@/components/navigators/BreadCrumb.vue';
import { useRoute } from 'vue-router';


const route = useRoute();

// API configuration
const API_CONFIG = {
  pageSize: 6,
  totalItems: 20,
}

// State
const jobs = ref([])
const page = ref(1)
const loading = ref(false)
const hasMore = ref(true)
const jobContainer = ref(null)
const totalJobs = ref(0)
const searchQuery = ref("");

const showBudgetDropdown = ref(false);
const showDeliveryDropdown = ref(false);
const showSortDropdown = ref(false);

const minBudget = ref(null);
const maxBudget = ref(null);


const deliveryOptions = ["24 Hours", "3 Days", "1 Week", "1 Month"];
const sortOptions = ["Most Recent", "Lowest Price", "Highest Price", "Best Rated"];

const selectedSort = ref(sortOptions[0]); // Default selection
const selectedDeliveryOption = ref(null);


const toggleBudgetDropdown = () => {
  showBudgetDropdown.value = !showBudgetDropdown.value;
  closeOtherDropdowns('budget');
};


const toggleDeliveryDropdown = () => {
  showDeliveryDropdown.value = !showDeliveryDropdown.value;
  closeOtherDropdowns('delivery');
};

const toggleSortDropdown = () => {
  showSortDropdown.value = !showSortDropdown.value;
  closeOtherDropdowns('sort');
};

// Close other dropdowns
const closeOtherDropdowns = (current) => {
  if (current !== 'budget') showBudgetDropdown.value = false;
  if (current !== 'delivery') showDeliveryDropdown.value = false;
  if (current !== 'sort') showSortDropdown.value = false;
};


// Apply filters
const applyBudgetFilter = () => {
  console.log(`Min Budget: ${minBudget.value}, Max Budget: ${maxBudget.value}`);
  showBudgetDropdown.value = false;
};


const applyDeliveryFilter = () => {
  console.log(`Selected Delivery Time: ${selectedDeliveryOption.value}`);
  showDeliveryDropdown.value = false;
};


const selectDeliveryOption = (option) => {
  selectedDeliveryOption.value = option;
};

const applySort = (option) => {
  selectedSort.value = option;
  console.log(`Sort By: ${option}`);
  showSortDropdown.value = false;
};


const breadcrumbs = computed(() => {
  const routePaths = route.path.split("/").filter(Boolean);
  return [
    { label: "Home", path: "/" },
    ...routePaths.map((path, index) => ({
      label: path.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      path: "/" + routePaths.slice(0, index + 1).join("/"),
    })),
  ];
});

// Computed
const noMoreJobs = computed(() => !loading.value && !hasMore.value)

// Mock data generator - Replace with your API
const mockDatabase = Array.from({ length: API_CONFIG.totalItems }, (_, index) => ({
  id: index + 1,
  title: `${['WordPress', 'React', 'Vue.js', 'Mobile App', 'E-commerce'][Math.floor(Math.random() * 5)]} ${
    ['Development', 'Integration', 'Customization', 'Design', 'Migration'][Math.floor(Math.random() * 5)]
  } Project`,
  projectStatus: Math.random() > 0.2 ? 'Open' : 'Hiring',
  budget: `$${Math.floor(Math.random() * 9 + 1)}k - $${Math.floor(Math.random() * 20 + 10)}k`,
  duration: `${Math.floor(Math.random() * 11 + 1)} ${['weeks', 'months'][Math.floor(Math.random() * 2)]}`,
  description: 'Looking for an experienced developer to help with our project. The ideal candidate will have strong technical skills and excellent communication abilities. Previous experience with similar projects is a plus.',
  skills: ['JavaScript', 'Vue.js', 'Node.js', 'React', 'TypeScript', 'PHP', 'WordPress', 'Flutter'].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3 + 3)),
  postedDate: new Date(Date.now() - Math.floor(Math.random() * 10) * 24 * 60 * 60 * 1000),
  proposals: Math.floor(Math.random() * 50),
  client: {
    name: `${['Alex', 'Sarah', 'Michael', 'Emma', 'David'][Math.floor(Math.random() * 5)]} ${
      ['W.', 'M.', 'R.', 'K.', 'T.'][Math.floor(Math.random() * 5)]
    }`,
    avatar: `https://i.pinimg.com/474x/43/6c/ac/436cac73f5fff533999f31147c3538b7.jpg`,
    rating: (Math.random() * 2 + 3).toFixed(1),
    totalSpent: Math.floor(Math.random() * 90 + 10),
    isVerified: Math.random() > 0.3,
    isOnline: Math.random() > 0.5,
  }
}))

// API service - Replace with your actual API calls
const apiService = {
  async fetchJobs(page, pageSize) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const pageData = mockDatabase.slice(start, end)
    
    return {
      jobs: pageData,
      totalJobs: mockDatabase.length,
      hasMore: end < mockDatabase.length
    }
  },

  async submitProposal(jobId) {
    await new Promise(resolve => setTimeout(resolve, 500))
    console.log(`Proposal submitted for project ${jobId}`)
    return { success: true }
  }
}

// Helpers
const formatDate = (date) => {
  const days = Math.floor((Date.now() - date) / (1000 * 60 * 60 * 24))
  return days === 0 ? 'Today' : days === 1 ? 'Yesterday' : `${days} days ago`
}

// Actions
const fetchJobs = async () => {
  if (loading.value || !hasMore.value) return
  
  loading.value = true
  try {
    const response = await apiService.fetchJobs(page.value, API_CONFIG.pageSize)
    jobs.value = [...jobs.value, ...response.jobs]
    totalJobs.value = response.totalJobs
    hasMore.value = response.hasMore
    page.value++
  } catch (error) {
    console.error('Error fetching projects:', error)
  } finally {
    loading.value = false
  }
}

const handleApply = async (jobId) => {
  try {
    await apiService.submitProposal(jobId)
    // Handle successful proposal submission
  } catch (error) {
    console.error('Error submitting proposal:', error)
  }
}

// Infinite scroll handler
const handleScroll = () => {
  if (!jobContainer.value) return
  
  const container = document.documentElement
  const scrollPosition = container.scrollTop + window.innerHeight
  const threshold = container.scrollHeight - 100

  if (scrollPosition > threshold) {
    fetchJobs()
  }
}

// Lifecycle hooks
onMounted(() => {
  fetchJobs()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>