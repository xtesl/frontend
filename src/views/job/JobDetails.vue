<template>
    <div class="min-h-screen bg-gradient-to-br from-teal-50 via-white to-teal-100 font-sans">
      <!-- Hero Section -->
      <div class="relative h-[450px] overflow-hidden bg-teal-600">
        <div class="container mx-auto px-4 relative z-10 flex items-center h-full">
          <div class="w-full md:w-2/3 mt-20 text-white">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              {{ job.title }}
            </h1>
            <div class="flex items-center space-x-4 mb-6">
              <span 
                class="px-4 py-2 rounded-full text-sm font-semibold uppercase"
                :class="job.projectStatus === 'Open' 
                  ? 'bg-white text-teal-600' 
                  : 'bg-yellow-400 text-gray-800'"
              >
                {{ job.projectStatus }}
              </span>
              <span class="text-sm opacity-80">Posted {{ formatDate(job.postedDate) }}</span>
            </div>
            <p class="text-xl mb-6 opacity-90">
              {{ job.description }}
            </p>
            <div class="flex space-x-4">
              <div class="bg-white/20 rounded-lg px-4 py-3">
                <span class="block text-sm">Budget</span>
                <span class="font-bold text-lg">{{ job.budget }}</span>
              </div>
              <div class="bg-white/20 rounded-lg px-4 py-3">
                <span class="block text-sm">Duration</span>
                <span class="font-bold text-lg">{{ job.duration }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Main Content -->
      <div class="container mx-auto px-4 py-12 -mt-16">
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Job Details Column -->
          <div class="md:col-span-2 bg-white shadow rounded-lg p-8">
            <h2 class="text-2xl font-semibold text-teal-600 mb-6">Project Details</h2>
            
            <!-- Skills -->
            <div class="mb-8">
              <h3 class="text-lg font-semibold text-teal-500 mb-4">Required Skills</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="(skill, index) in job.skills" 
                  :key="index"
                  class="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
  
            <!-- Detailed Description -->
            <div>
              <h3 class="text-lg font-semibold text-teal-500 mb-4">Full Description</h3>
              <p class="text-gray-700 leading-relaxed">
                {{ job.fullDescription }}
              </p>
            </div>
          </div>
  
          <!-- Client Info Column -->
          <div class="bg-white shadow rounded-lg p-8">
            <div class="flex items-center mb-6">
              <img 
                :src="job.client.avatar" 
                alt="Client Avatar" 
                class="w-16 h-16 rounded-full mr-4 object-cover border-2 border-teal-500"
              />
              <div>
                <h3 class="text-lg font-bold text-gray-800">{{ job.client.name }}</h3>
                <div class="flex items-center text-sm text-gray-600">
                  <span class="mr-2">★ {{ job.client.rating }}</span>
                  <span 
                    v-if="job.client.isVerified" 
                    class="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full"
                  >
                    Verified
                  </span>
                </div>
              </div>
            </div>
            <div class="space-y-3 text-sm text-gray-700">
              <p>Total Spent: <span class="font-semibold">${{ job.client.totalSpent }}k</span></p>
              <p>
                Status: 
                <span 
                  :class="job.client.isOnline ? 'text-teal-600' : 'text-gray-500'"
                >
                  {{ job.client.isOnline ? 'Online' : 'Offline' }}
                </span>
              </p>
            </div>
          </div>
        </div>
  
        <!-- Current Proposals -->
        <div class="mt-12 bg-white shadow rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-teal-600 mb-6">Current Proposals</h2>
          <div v-if="proposedFreelancers.length" class="space-y-4">
            <div 
              v-for="freelancer in proposedFreelancers" 
              :key="freelancer.id" 
              class="flex items-center bg-teal-50 p-4 rounded-lg hover:bg-teal-100 transition-colors"
            >
              <img 
                :src="freelancer.avatar" 
                alt="Freelancer Avatar" 
                class="w-12 h-12 rounded-full mr-4 object-cover border-2 border-teal-500"
              />
              <div class="flex-grow">
                <h3 class="text-lg font-bold text-gray-800">{{ freelancer.name }}</h3>
                <div class="text-sm text-gray-600">
                  <span class="mr-2">★ {{ freelancer.rating }}</span>
                  <span 
                    v-if="freelancer.isTopRated" 
                    class="bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full"
                  >
                    Top Rated
                  </span>
                </div>
              </div>
              <div class="text-right">
                <p class="text-sm text-gray-700">Bid: <span class="font-semibold">${{ freelancer.bid }}</span></p>
                <p class="text-sm text-gray-500">Estimated Delivery: {{ freelancer.deliveryTime }} days</p>
              </div>
            </div>
          </div>
          <p v-else class="text-center text-gray-500">No proposals submitted yet</p>
        </div>
  
        <!-- Proposal Form -->
        <div class="mt-12 bg-white shadow rounded-lg p-8">
          <h2 class="text-2xl font-semibold text-teal-600 mb-6 text-center">Submit Your Proposal</h2>
          <form @submit.prevent="submitProposal" class="max-w-2xl mx-auto space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" for="bid">
                  Your Bid ($)
                </label>
                <input 
                  v-model="proposal.bid" 
                  type="number" 
                  id="bid" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your bid"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2" for="delivery">
                  Estimated Delivery (Days)
                </label>
                <input 
                  v-model="proposal.deliveryTime" 
                  type="number" 
                  id="delivery" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Days to complete"
                  required
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2" for="message">
                Proposal Message
              </label>
              <textarea 
                v-model="proposal.message"
                id="message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Describe why you're the best fit for this project"
                required
              ></textarea>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2" for="attachment">
                Attachment (optional)
              </label>
              <input 
                type="file" 
                id="attachment"
                @change="handleFileUpload"
                class="w-full text-sm text-gray-500 
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-teal-50 file:text-teal-700
                  hover:file:bg-teal-100"
              />
            </div>
            <button 
              type="submit" 
              class="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 transition-colors"
            >
              Submit Proposal
            </button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const job = ref({
    title: 'Full Stack Vue.js Development Project',
    projectStatus: 'Open',
    postedDate: new Date(),
    budget: '$5,000 - $15,000',
    duration: '2-3 months',
    description: 'Innovative web application development opportunity for a skilled Vue.js developer.',
    fullDescription: 'We are seeking an experienced Vue.js developer to build a comprehensive web application with modern front-end and back-end technologies. The ideal candidate will have strong problem-solving skills, expertise in Vue.js ecosystem, and a proven track record of delivering high-quality, scalable software solutions. This project requires deep understanding of component-based architecture, state management, and responsive design principles.',
    skills: ['Vue.js', 'Tailwind CSS', 'Node.js', 'TypeScript', 'REST APIs', 'Vuex', 'PWA'],
    client: {
      name: 'Tech Innovations Inc.',
      avatar: 'https://via.placeholder.com/150',
      rating: '4.8',
      totalSpent: '250',
      isVerified: true,
      isOnline: true
    }
  })
  
  const proposedFreelancers = ref([
    {
      id: 1,
      name: 'Alex Rodriguez',
      avatar: 'https://via.placeholder.com/150',
      rating: '4.9',
      isTopRated: true,
      bid: 6500,
      deliveryTime: 45
    },
    {
      id: 2,
      name: 'Emily Chen',
      avatar: 'https://via.placeholder.com/150',
      rating: '4.7',
      isTopRated: false,
      bid: 5800,
      deliveryTime: 60
    },
    {
      id: 3,
      name: 'Michael Thompson',
      avatar: 'https://via.placeholder.com/150',
      rating: '4.6',
      isTopRated: false,
      bid: 7200,
      deliveryTime: 40
    }
  ])
  
  const proposal = ref({
    bid: null,
    deliveryTime: null,
    message: '',
    attachment: null
  })
  
  const submitProposal = () => {
    console.log('Proposal submitted:', proposal.value)
    // Add proposal submission logic
  }
  
  const handleFileUpload = (event) => {
    proposal.value.attachment = event.target.files[0]
  }
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }
  </script>