<template>
     <div class="min-h-screen mt-16 bg-gray-50">
    <!-- Hero Banner Section -->
    <div class="relative h-64 md:h-80">
      <!-- Banner Image with overlay -->
      <div class="absolute inset-0">
        <img 
          :src="'https://miro.medium.com/v2/resize:fit:750/1*3T7J7csXY8u36acofw5N8g.jpeg'" 
          alt="Banner" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
      
      <!-- Banner Edit Button -->
      <button @click="openImageUpload('banner')"
              class="absolute top-4 right-4 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full">
        <span class="sr-only">Edit Banner</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
      </button>

      <div class="container mx-auto px-4 h-full flex items-end">
        <!-- Profile Image Container -->
        <div class="relative -bottom-16 group">
          <img 
            :src="profile.profileImage || '/api/placeholder/160/160'" 
            alt="Profile" 
            class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg"
          />
          <!-- Profile Image Edit Button -->
          <button @click="openImageUpload('profile')"
                  class="absolute bottom-2 right-2 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="container mx-auto px-4 pt-24">
      <!-- Profile Header -->
      <div class="flex flex-col md:flex-row md:items-center justify-between">
        <div class="flex-1">
          <div class="flex items-center gap-3">
            <h1 class="text-3xl font-bold text-gray-900">{{ profile.name }}</h1>
            <span class="bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full flex items-center">
              <span class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Verified
            </span>
            <!-- More Options Button -->
            <div class="relative">
              <button @click="toggleMoreOptions" 
                      class="p-2 hover:bg-gray-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
              <!-- Dropdown Menu -->
              <div v-if="showMoreOptions" 
                   class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-10">
                <button @click="editProfile" 
                        class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Edit Profile
                </button>
                <button @click="configureSettings" 
                        class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Settings
                </button>
                <button @click="managePortfolio" 
                        class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Manage Portfolio
                </button>
              </div>
            </div>
          </div>
          <p class="text-gray-600 mt-1">{{ profile.title }}</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="text-gray-600">
              <i class="fas fa-map-marker-alt"></i> {{ profile.location }}
            </span>
            <span class="text-gray-600">
              <i class="fas fa-clock"></i> {{ profile.availability }}
            </span>
          </div>
          </div>

         <!-- Social Links -->
  <div class="flex gap-4 mt-4">
    <a v-for="social in socials" 
       :key="social.name"
       :href="social.link"
       :title="social.name"
       class="text-gray-600 hover:text-teal-500 transition-colors p-2 hover:bg-gray-100 rounded-full">
      <svg v-if="social.name === 'GitHub'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      <svg v-if="social.name === 'LinkedIn'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
      <svg v-if="social.name === 'Twitter'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
      </svg>
      <svg v-if="social.name === 'Portfolio'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    </a>
  </div>

        
        <!-- Action Buttons -->
        <div class="mt-4 md:mt-0 flex gap-3">
          <button class="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
            Hire Me
          </button>
          <button class="border border-teal-500 text-teal-500 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors">
            Download CV
          </button>
        </div>
      </div>
  
        <!-- Bio Section -->
        <div class="mt-8">
          <h2 class="text-2xl font-semibold text-gray-900">About Me</h2>
          <p class="mt-4 text-gray-600 leading-relaxed">
            Passionate full-stack developer with 8+ years of experience building scalable web applications. 
            Specialized in Vue.js, Node.js, and cloud architecture. Committed to delivering high-quality, 
            maintainable code and excellent user experiences.
          </p>
        </div>

       
  
        <!-- Skills Section -->
        <div class="mt-12">
          <h2 class="text-2xl font-semibold text-gray-900">Skills</h2>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill" 
                  class="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
              {{ skill }}
            </span>
          </div>
        </div>
  
        <!-- Certifications -->
        <div class="mt-12">
    <h2 class="text-2xl font-semibold text-gray-900">Certifications</h2>
    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="cert in certifications" :key="cert.name" 
           class="group p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 relative overflow-hidden">
        <!-- Certificate Badge -->
        <div class="absolute top-0 right-0 w-16 h-16">
          <div class="absolute transform rotate-45 bg-teal-500 text-white text-xs py-1 right-[-35px] top-[32px] w-[170px] text-center">
            Verified
          </div>
        </div>
        
        <!-- Certificate Icon -->
        <div class="mb-4">
          <span class="inline-block p-3 bg-teal-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </span>
        </div>
        
        <!-- Certificate Content -->
        <h3 class="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
          {{ cert.name }}
        </h3>
        <p class="text-gray-600 mt-2">{{ cert.issuer }}</p>
        <div class="mt-4 flex items-center text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Issued {{ cert.date }}
        </div>
        
        <!-- View Certificate Button -->
        <button class="mt-4 text-teal-500 hover:text-teal-600 text-sm font-medium flex items-center group-hover:gap-2 transition-all">
          View Certificate
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  
        <!-- Portfolio -->
        <div class="mt-12 mb-16">
          <h2 class="text-2xl font-semibold text-gray-900">Portfolio</h2>
          <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="project in portfolio" :key="project.name" 
                 class="group relative overflow-hidden rounded-lg">
              <img :src="project.image" :alt="project.name" 
                   class="w-full h-48 object-cover" />
              <div class="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div class="text-center p-4">
                  <h3 class="text-white font-medium">{{ project.name }}</h3>
                  <p class="text-gray-300 text-sm mt-2">{{ project.description }}</p>
                  <a :href="project.link" 
                     class="mt-4 inline-block text-teal-400 hover:text-teal-300">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    <div v-if="showImageUploadModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-lg font-semibold mb-4">
          Update {{ imageUploadType === 'banner' ? 'Banner' : 'Profile' }} Image
        </h3>
        <div class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <input type="file" accept="image/*" @change="handleImageUpload" class="hidden" ref="fileInput">
          <button @click="$refs.fileInput.click()" 
                  class="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg">
            Choose Image
          </button>
        </div>
        <div class="mt-4 flex justify-end gap-2">
          <button @click="showImageUploadModal = false" 
                  class="px-4 py-2 text-gray-600 hover:text-gray-800">
            Cancel
          </button>
          <button @click="saveImage" 
                  class="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg">
            Save
          </button>
        </div>
      </div>
    </div>
</div>
  

  </template>
  


  <script setup>
  import { ref } from 'vue'
  
  const showMoreOptions = ref(false)
  const showImageUploadModal = ref(false)
  const imageUploadType = ref('')
  
  const profile = ref({
    name: 'John Doe',
    title: 'Senior Full Stack Developer',
    location: 'New York, USA',
    availability: 'Available for work',
    bio: 'Passionate full-stack developer with 8+ years of experience building scalable web applications. Specialized in Vue.js, Node.js, and cloud architecture. Committed to delivering high-quality, maintainable code and excellent user experiences.',
    bannerImage: '/api/placeholder/1200/400',
    profileImage: '/api/placeholder/160/160'
  })


  const certifications = ref([
  {
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    link: '#'
  },
  {
    name: 'Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: 'Sep 2023',
    link: '#'
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker',
    date: 'Mar 2023',
    link: '#'
  },
  {
    name: 'Vue.js Advanced Developer',
    issuer: 'Vue.js Certification Program',
    date: 'Dec 2022',
    link: '#'
  }
])
  
const socials = ref([
  {
    name: 'GitHub',
    link: 'https://github.com',
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com',
  },
  {
    name: 'Portfolio',
    link: '#',
  }
])
  
  const skills = ref([
    'Vue.js', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'GraphQL',
    'React', 'MongoDB', 'PostgreSQL', 'REST APIs', 'DevOps', 'CI/CD'
  ])
  
  const portfolio = ref([
    {
      name: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution built with Vue 3 and Node.js',
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      name: 'Task Management App',
      description: 'Real-time collaborative task management application',
      image: '/api/placeholder/400/300',
      link: '#'
    },
    {
      name: 'Analytics Dashboard',
      description: 'Interactive data visualization dashboard with real-time updates',
      image: '/api/placeholder/400/300',
      link: '#'
    }
  ])
  
  const toggleMoreOptions = () => {
    showMoreOptions.value = !showMoreOptions.value
  }
  
  const openImageUpload = (type) => {
    imageUploadType.value = type
    showImageUploadModal.value = true
  }
  
  const handleImageUpload = (event) => {
    // Handle image upload logic
    console.log('Image uploaded:', event.target.files[0])
  }
  
  const saveImage = () => {
    // Save image logic
    showImageUploadModal.value = false
  }
  
  const editProfile = () => {
    // Implement edit profile logic
    showMoreOptions.value = false
  }
  
  const configureSettings = () => {
    // Implement settings logic
    showMoreOptions.value = false
  }
  
  const managePortfolio = () => {
    // Implement portfolio management logic
    showMoreOptions.value = false
  }
  
  const editProject = (project) => {
    // Implement project edit logic
    console.log('Editing project:', project)
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>