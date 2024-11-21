<template>
  <header>
    <nav :class="[
      'fixed w-full z-20 top-0 start-0 transition-all duration-300',
      isScrolled ? 'bg-white shadow-lg' : 'bg-white'
    ]">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 lg:px-6 py-4">
        <!-- Logo -->
        <a href="/" class="flex items-center space-x-3" @click="closeMobileMenu">
          <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 w-auto" alt="Flowbite Logo" />
          <span class="text-xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text">
            Flowbite
          </span>
        </a>

        <!-- Desktop Buttons -->
        <div class="flex items-center lg:order-2">
          <template v-if="!authStore.isAuthenticated">
            <button @click="handleLoginClick"
              class="text-gray-700 hover:text-gray-900 transition-colors font-medium rounded-lg text-sm 
                     px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden lg:block hover:bg-gray-50">
              Log in
            </button>
            <button @click="handleSignupClick"
              class="hidden lg:block px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg 
                     hover:from-teal-600 hover:to-blue-600 transition-all transform hover:scale-105 
                     active:scale-95 shadow-md hover:shadow-lg font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
              Get started
            </button>
          </template>
          <button v-else @click="handleSignout"
            class="hidden lg:block px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 
                   transition-colors text-gray-700 font-medium text-sm lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-50">
            Logout
          </button>

          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden 
                   hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span class="sr-only">Toggle mobile menu</span>
            <svg v-if="!isMobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex lg:w-auto lg:order-1">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <a href="#" 
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu">
                Home
              </a>
            </li>
            <li>
              <RouterLink to="/jobs" 
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu">
                Marketplace
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/institutions" 
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu">
                Institutions
              </RouterLink>
            </li>
            <li>
              <a href="#" 
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu">
                Team
              </a>
            </li>
            <li>
              <a href="#" 
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu">
                Contact
              </a>
            </li>
            <li v-if="isAuthenticated">
              <RouterLink to="#" 
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu">
                Account
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Mobile Menu -->
        <div v-show="isMobileMenuOpen"
          class="fixed inset-x-0 top-[65px] lg:hidden bg-white shadow-lg border-t border-gray-100">
          <ul class="flex flex-col px-4 py-6 font-medium space-y-4">
            <li>
              <a href="#" 
                class="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                @click="closeMobileMenu">
                Home
              </a>
            </li>
            <li>
              <RouterLink to="/jobs" 
                class="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                @click="closeMobileMenu">
                Marketplace
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/institutions" 
                class="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                @click="closeMobileMenu">
                Institutions
              </RouterLink>
            </li>
            <li>
              <a href="#" 
                class="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                @click="closeMobileMenu">
                Team
              </a>
            </li>
            <li>
              <a href="#" 
                class="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                @click="closeMobileMenu">
                Contact
              </a>
            </li>
            <li v-if="authStore.isAuthenticated">
              <RouterLink to="#" 
                class="block text-gray-700 hover:text-gray-900 transition-colors py-2"
                @click="closeMobileMenu">
                Account
              </RouterLink>
            </li>
            <!-- Mobile Auth Buttons -->
            <div class="pt-4 border-t border-gray-200" v-if="!authStore.isAuthenticated">
              <button @click="handleLoginClick"
                class="w-full mb-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-50">
                Log in
              </button>
              <button @click="handleSignupClick"
                class="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg 
                       hover:from-teal-600 hover:to-blue-600 transition-colors">
                Get started
              </button>
            </div>
            <button v-else @click="handleSignout"
              class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 
                     transition-colors text-gray-700 hover:bg-gray-50">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores';


const authStore = useAuthStore();

const props = defineProps({
  isAuthenticated: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['open-login', 'open-signup'])
const router = useRouter()

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// Handle auth actions with menu closing
const handleLoginClick = () => {
  closeMobileMenu()
  emit('open-login')
}

const handleSignupClick = () => {
  closeMobileMenu()
  emit('open-signup')
}

const handleSignout = () => {
  closeMobileMenu()
  emit('signout');
  authStore.logout();
  router.push('/');
  // Implement your signout logic here
  console.log('Signing out...')
}

// Scroll handling
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Close mobile menu on route change
  router.beforeEach((to, from, next) => {
    closeMobileMenu()
    next()
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply relative transition-colors py-2;
}

.nav-link::after {
  @apply absolute bottom-0 left-0 h-0.5 w-0 bg-teal-500 transition-all duration-300 content-[''];
}

.nav-link:hover::after {
  @apply w-full;
}
</style>