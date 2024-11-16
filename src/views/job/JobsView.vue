<template>
    <div class="min-h-screen bg-gray-100 p-4 sm:p-6">
      <!-- Header -->
      <header class="mb-6 sm:mb-8">
        <h1 class="text-2xl sm:text-3xl font-bold text-gray-800">Freelance Projects</h1>
        <p class="text-gray-600">{{ totalJobs }} available opportunities</p>
      </header>
  
      <!-- Project Cards Container -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6" ref="jobContainer">
        <div v-for="job in jobs" :key="job.id" 
          @click="handleJobClick(job.id)"
          class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 cursor-pointer">
          <!-- Project Header -->
          <div class="p-4 sm:p-6 border-b border-gray-100">
            <div class="flex justify-between items-start gap-4 mb-4">
              <h2 class="text-lg sm:text-xl font-bold text-gray-800 hover:text-blue-600">
                {{ job.title }}
              </h2>
              <div class="flex-shrink-0">
                <span 
                  :class="[
                    'px-2 sm:px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap',
                    job.projectStatus === 'Open' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  ]"
                >
                  {{ job.projectStatus }}
                </span>
              </div>
            </div>
  
            <!-- Rest of the template remains the same until the end -->
            <!-- Budget and Timeline -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-4 text-sm">
              <div class="flex items-center space-x-2">
                <span class="text-gray-600">💰 Budget:</span>
                <span class="font-semibold text-gray-800">{{ job.budget }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-gray-600">⏱️ Duration:</span>
                <span class="font-semibold text-gray-800">{{ job.duration }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <span class="text-gray-600">📅 Posted:</span>
                <span class="font-semibold text-gray-800">{{ formatDate(job.postedDate) }}</span>
              </div>
            </div>
  
            <!-- Project Description -->
            <p class="text-gray-600 mb-4 text-sm sm:text-base line-clamp-3">{{ job.description }}</p>
  
            <!-- Skills Required -->
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="skill in job.skills" 
                :key="skill"
                class="px-2 sm:px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs sm:text-sm font-medium hover:bg-blue-100 transition-colors"
              >
                {{ skill }}
              </span>
            </div>
          </div>
  
          <!-- Project Stats and Client Info -->
          <div class="p-4 sm:px-6 bg-gray-50 rounded-b-xl">
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
                      job.client.isOnline ? 'bg-green-400' : 'bg-gray-300'
                    ]"
                  ></span>
                </div>
                <div class="min-w-0">
                  <div class="flex items-center space-x-1">
                    <p class="text-sm font-medium text-gray-800 truncate">{{ job.client.name }}</p>
                    <span v-if="job.client.isVerified" class="flex-shrink-0 text-blue-500">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    </span>
                  </div>
                  <div class="flex items-center space-x-1 text-sm text-gray-600">
                    <span class="flex items-center">
                      <span>{{ job.client.rating }}</span>
                      <span class="text-yellow-400 ml-0.5">★</span>
                    </span>
                    <span>•</span>
                    <span class="whitespace-nowrap">${{ job.client.totalSpent }}k+ spent</span>
                  </div>
                </div>
              </div>
  
              <!-- Project Stats -->
              <div class="flex items-center space-x-6">
                <div class="text-center">
                  <p class="text-sm font-medium text-gray-600">Proposals</p>
                  <p class="text-lg font-semibold text-gray-800">{{ job.proposals }}</p>
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
                      job.client.isOnline ? 'bg-green-400' : 'bg-gray-300'
                    ]"
                  ></span>
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-center space-x-1">
                    <p class="text-sm font-medium text-gray-800 truncate">{{ job.client.name }}</p>
                    <span v-if="job.client.isVerified" class="flex-shrink-0 text-blue-500">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
                      </svg>
                    </span>
                  </div>
                  <div class="flex items-center space-x-1 text-sm text-gray-600">
                    <span class="flex items-center">
                      <span>{{ job.client.rating }}</span>
                      <span class="text-yellow-400 ml-0.5">★</span>
                    </span>
                    <span>•</span>
                    <span>${{ job.client.totalSpent }}k+ spent</span>
                  </div>
                </div>
              </div>
  
              <!-- Project Stats & Button -->
              <div class="flex items-center justify-between">
                <div class="text-center bg-gray-100 px-4 py-2 rounded-lg">
                  <p class="text-sm font-medium text-gray-600">Proposals</p>
                  <p class="text-lg font-semibold text-gray-800">{{ job.proposals }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Loading and End States -->
      <div class="col-span-full mt-8 text-center">
        <div v-if="loading" class="flex justify-center p-4">
          <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
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
      avatar: `/api/placeholder/40/40`,
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