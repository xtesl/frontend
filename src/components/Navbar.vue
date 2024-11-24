<template>
  <header>
    <nav
      :class="[
        'fixed w-full z-20 top-0 start-0 transition-all  shadow duration-300',
        isScrolled ? 'bg-white shadow-lg' : 'bg-white',
      ]"
    >
      <div
        class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 lg:px-6 py-4"
      >
        <!-- Logo -->
        <a
          href="/"
          class="flex items-center space-x-3"
          @click="closeMobileMenu"
        >
          <img src="/bloopra_logo.svg" class="h-8 w-auto" alt="Flowbite Logo" />
          <span
            class="text-xl font-bold bg-gradient-to-r from-teal-500 to-blue-500 text-transparent bg-clip-text"
          >
            {{ COMPANY_NAME }}
          </span>
        </a>

      <!-- Desktop Buttons -->
<div class="flex items-center lg:order-2">
  <template v-if="!authStore.isAuthenticated">
    <button
      @click="handleLoginClick"
      class="text-gray-700 hover:text-gray-900 transition-colors font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hidden lg:block hover:bg-gray-50"
    >
      Log in
    </button>
    <button
      @click="handleSignupClick"
      class="hidden lg:block px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-all transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
    >
      Get started
    </button>
  </template>
  <div v-else class="relative hidden lg:block">
    <!-- Account Icon -->
    <button
      @click="toggleDropdown"
      class="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity shadow-md"
    >
      <i class="pi pi-user text-xl"></i>
    </button>

    <!-- Dropdown Menu -->
    <div
  v-show="isDropdownOpen"
  class="absolute right-0 mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-lg z-50"
>
  <ul class="flex flex-col py-4 space-y-2 px-4">
    <li>
      <RouterLink
        to="/user/profile"
        class="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all py-2 px-3"
      >
        <i class="pi pi-user text-teal-500 text-lg"></i>
        <span>Profile</span>
      </RouterLink>
    </li>
    <li>
      <a
        href="#"
        class="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all py-2 px-3"
      >
        <i class="pi pi-cog text-teal-500 text-lg"></i>
        <span>Settings</span>
      </a>
    </li>
    <li>
      <RouterLink
        to="/user/fr/Dashboard"
        class="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all py-2 px-3"
      >
        <i class="pi pi-th-large text-teal-500 text-lg"></i>
        <span>Dashboard</span>
      </RouterLink>
    </li>
    <li>
      <button
        @click="handleSignout"
        class="w-full flex items-center space-x-3 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all py-2 px-3"
      >
        <i class="pi pi-sign-out text-teal-500 text-lg"></i>
        <span>Logout</span>
      </button>
    </li>
  </ul>
</div>
  </div>


          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span class="sr-only">Toggle mobile menu</span>
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex lg:w-auto lg:order-1">
          <ul
            class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center"
          >
            <li>
              <a
                href="#"
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu"
              >
                Home
              </a>
            </li>
            <li  v-if="authStore.isAuthenticated">
              <RouterLink
                to="/jobs"
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu"
              >
                Marketplace
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/institutions"
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu"
              >
                Institutions
              </RouterLink>
            </li>
            <li>
              <a
                href="#"
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                class="nav-link text-gray-700 hover:text-gray-900"
                @click="closeMobileMenu"
              >
                Contact
              </a>
            </li>
           
          </ul>
        </div>

        <!-- Mobile Menu -->
        <div
  v-show="isMobileMenuOpen"
  class="fixed inset-x-0 top-[65px] lg:hidden bg-white shadow-lg border-t border-gray-100"
>
  <ul class="flex flex-col px-4 py-6 font-medium space-y-4">
    <!-- Menu Items with Icons -->
    <li>
      <a
        href="#"
        class="flex items-center text-gray-700 hover:text-teal-600 transition-colors py-2"
        @click="closeMobileMenu"
      >
        <i class="pi pi-home mr-3"></i> Home
      </a>
    </li>
    <li  v-if="authStore.isAuthenticated">
      <RouterLink
        to="/jobs"
        class="flex items-center text-gray-700 hover:text-teal-600 transition-colors py-2"
        @click="closeMobileMenu"
      >
        <i class="pi pi-briefcase mr-3"></i> Marketplace
      </RouterLink>
    </li>
    <li>
      <RouterLink
        to="/institutions"
        class="flex items-center text-gray-700 hover:text-teal-600 transition-colors py-2"
        @click="closeMobileMenu"
      >
        <i class="pi pi-building mr-3"></i> Institutions
      </RouterLink>
    </li>
    <li>
      <a
        href="#"
        class="flex items-center text-gray-700 hover:text-teal-600 transition-colors py-2"
        @click="closeMobileMenu"
      >
        <i class="pi pi-users mr-3"></i> Team
      </a>
    </li>
    <li>
      <a
        href="#"
        class="flex items-center text-gray-700 hover:text-teal-600 transition-colors py-2"
        @click="closeMobileMenu"
      >
        <i class="pi pi-envelope mr-3"></i> Contact
      </a>
    </li>

    <!-- Account Icon -->
    <!-- Account Dropdown for Mobile -->
<li
  v-if="authStore.isAuthenticated"
  class="relative flex justify-center py-4 border-t border-gray-200"
>
  <button
    @click="toggleDropdown"
    class="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-opacity"
  >
    <i class="pi pi-user text-2xl"></i>
  </button>

  <div
    v-show="isDropdownOpen"
    class="absolute top-[70px] right-1/2 transform translate-x-1/2 w-56 bg-white shadow-lg border border-gray-200 rounded-lg z-50"
  >
    <ul class="flex flex-col py-4 space-y-2 px-4">
      <li>
        <RouterLink
          to="/user/profile"
          class="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all py-2 px-3"
        >
          <i class="pi pi-user text-teal-500 text-lg"></i>
          <span>Profile</span>
        </RouterLink>
      </li>
      <li>
        <a
          href="#"
          class="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all py-2 px-3"
        >
          <i class="pi pi-cog text-teal-500 text-lg"></i>
          <span>Settings</span>
        </a>
      </li>
      <li>
        <RouterLink
          to="/user/fr/Dashboard"
          class="flex items-center space-x-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all py-2 px-3"
        >
          <i class="pi pi-th-large text-teal-500 text-lg"></i>
          <span>Dashboard</span>
        </RouterLink>
      </li>
    </ul>
  </div>
</li>


    <!-- Auth Buttons -->
    <div
      class="pt-4 border-t border-gray-200"
      v-if="!authStore.isAuthenticated"
    >
      <button
        @click="handleLoginClick"
        class="w-full mb-2 px-4 py-2 text-gray-700 hover:text-teal-600 transition-colors rounded-lg hover:bg-gray-50 border border-gray-300 flex items-center justify-center"
      >
        <i class="pi pi-sign-in mr-2"></i> Log in
      </button>
      <button
        @click="handleSignupClick"
        class="w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:from-teal-600 hover:to-blue-600 transition-colors flex items-center justify-center"
      >
        <i class="pi pi-user-plus mr-2"></i> Get started
      </button>
    </div>




    <button
      v-else
      @click="handleSignout"
      class="w-full px-4 py-2 mt-2 border-2 border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-gray-700 hover:bg-gray-50 flex items-center justify-center"
    >
      <i class="pi pi-sign-out mr-2"></i> Logout
    </button>
  </ul>
</div>
</div>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { useAuthStore } from "@/stores";
import { COMPANY_NAME } from "@/utils/constants";

const authStore = useAuthStore();

const props = defineProps({
  isAuthenticated: {
    type: Boolean,
    default: false,
  },
});

const isDropdownOpen = ref(false);
const toggleDropdown = () => {
      isDropdownOpen.value = !isDropdownOpen.value;
    };
 const closeDropdown = () => {
      isDropdownOpen.value = false;
    };

const emit = defineEmits(["open-login", "open-signup"]);
const router = useRouter();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

// Handle auth actions with menu closing
const handleLoginClick = () => {
  closeMobileMenu();
  emit("open-login");
};

const handleSignupClick = () => {
  closeMobileMenu();
  emit("open-signup");
};

const handleSignout = () => {
  closeMobileMenu();
  emit("signout");
  authStore.logout();
  router.push("/");
  // Implement your signout logic here
  console.log("Signing out...");
};

// Scroll handling
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);

  // Close mobile menu on route change
  router.beforeEach((to, from, next) => {
    closeMobileMenu();
    next();
  });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
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
