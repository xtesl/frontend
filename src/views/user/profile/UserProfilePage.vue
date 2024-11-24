<template>
  <div class="min-h-screen mt-20  bg-gray-50">
    <!-- Top Navigation -->
    <nav class="bg-white shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-xl font-semibold text-gray-900">Account Settings</h1>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-gray-500 hover:text-gray-700">
              <span class="sr-only">Notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <button class="flex items-center space-x-2 text-gray-500 hover:text-gray-700">
              <img :src="userData.avatar" alt="User avatar" class="h-8 w-8 rounded-full">
              <span class="hidden sm:block">{{ userData.fullName }}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Profile Navigation -->
      <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 lg:col-span-3">
          <nav class="space-y-1 bg-white p-4 rounded-lg shadow-sm">
            <a href="#" class="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-teal-50 text-teal-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Profile Information
            </a>
            <a href="#" class="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Security
            </a>
            <a href="#" class="flex items-center px-4 py-3 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Notifications
            </a>
          </nav>

          <!-- Profile Completion -->
          <div class="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <h3 class="text-sm font-medium text-gray-900">Profile Completion</h3>
            <div class="mt-4">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
                    <span class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
                      Progress
                    </span>
                  </div>
                  <div class="text-right">
                    <span class="text-xs font-semibold inline-block text-teal-600">
                      75%
                    </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
                  <div style="width: 75%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"></div>
                </div>
              </div>
            </div>
            <div class="mt-4 space-y-2">
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Profile picture added
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                Basic information completed
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <svg class="h-4 w-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Phone number verification pending
              </div>
            </div>
          </div>
        </div>

        <!-- Main Profile Content -->
        <div class="col-span-12 lg:col-span-9 space-y-6">
          <!-- Profile Header -->

         <div class="bg-white p-6 rounded-lg shadow-sm">
  <div class="sm:flex sm:items-center sm:justify-between">
    <div class="sm:flex sm:space-x-8 items-center">
      <div class="relative mb-4 sm:mb-0 inline-block">
        <img
          :src="avatarPreview || userData.avatar"
          class="w-24 h-24 rounded-full object-cover border-4 border-teal-50"
          alt="User avatar"
        />
        <label class="absolute -bottom-2 -right-2 bg-teal-500 p-2 rounded-full cursor-pointer hover:bg-teal-600 transition-colors">
          <input
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleAvatarChange"
          />
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </label>
      </div>
      <div>
        <h2 class="text-2xl font-bold text-gray-900">{{ userData.fullName }}</h2>
        <p class="text-sm text-gray-500">{{ userData.email }}</p>
        <p class="mt-1 text-sm text-gray-500">Member since {{ userData.joinDate }}</p>
      </div>
    </div>
    <div class="mt-4 sm:mt-0">
      <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800">
        Premium Member
      </span>
    </div>
  </div>
</div>

          <!-- Profile Form -->
          <form @submit.prevent="saveChanges" class="bg-white rounded-lg shadow-sm">
            <div class="p-6">
              <h3 class="text-lg font-medium text-gray-900 mb-6">Personal Information</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    v-model="formData.fullName"
                    type="text"
                    class="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                  <input
                    v-model="formData.displayName"
                    type="text"
                    class="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    v-model="formData.email"
                    type="email"
                    class="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div class="relative">
                    <input
                      v-model="formData.phone"
                      type="tel"
                      class="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <span v-if="!formData.phoneVerified" class="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-orange-500">
                      Verify
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Password Section -->
            <div class="border-t border-gray-200 p-6">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-medium text-gray-900">Password</h3>
                <button
                  type="button"
                  @click="togglePasswordChange"
                  class="text-sm text-teal-600 hover:text-teal-700 font-medium"
                >
                  {{ showPasswordChange ? 'Cancel' : 'Change Password' }}
                </button>
              </div>

              <div v-if="showPasswordChange" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input
                      v-model="passwordData.currentPassword"
                      type="password"
                      class="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div></div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input
                      v-model="passwordData.newPassword"
                      type="password"
                      class="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input
                      v-model="passwordData.confirmPassword"
                      type="password"
                      class="w-full p-2.5 border rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                </div>
                </div>
                <!-- Password Requirements -->
                <div class="bg-gray-50 rounded-md p-4 mt-4">
                <!-- Password Requirements (continued) -->
                <div class="bg-gray-50 rounded-md p-4 mt-4">
                  <h4 class="text-sm font-medium text-gray-700 mb-3">Password Requirements:</h4>
                  <ul class="space-y-2">
                    <li class="flex items-center text-sm text-gray-600">
                      <svg class="h-4 w-4 text-green-500 mr-2" v-if="passwordStrength.length" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <svg class="h-4 w-4 text-gray-400 mr-2" v-else fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Minimum 8 characters
                    </li>
                    <li class="flex items-center text-sm text-gray-600">
                      <svg class="h-4 w-4 text-green-500 mr-2" v-if="passwordStrength.uppercase" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <svg class="h-4 w-4 text-gray-400 mr-2" v-else fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      At least one uppercase letter
                    </li>
                    <li class="flex items-center text-sm text-gray-600">
                      <svg class="h-4 w-4 text-green-500 mr-2" v-if="passwordStrength.number" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <svg class="h-4 w-4 text-gray-400 mr-2" v-else fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      At least one number
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Notification Preferences -->
            <div class="border-t border-gray-200 p-6">
              <h3 class="text-lg font-medium text-gray-900 mb-6">Notification Preferences</h3>
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="text-sm font-medium text-gray-700">Email Notifications</h4>
                    <p class="text-sm text-gray-500">Receive emails about your account activity</p>
                  </div>
                  <button 
                    type="button"
                    :class="[formData.emailNotifications ? 'bg-teal-500' : 'bg-gray-200']"
                    class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
                    @click="formData.emailNotifications = !formData.emailNotifications"
                  >
                    <span
                      :class="[formData.emailNotifications ? 'translate-x-5' : 'translate-x-0']"
                      class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    />
                  </button>
                </div>

                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="text-sm font-medium text-gray-700">SMS Notifications</h4>
                    <p class="text-sm text-gray-500">Receive text messages for important updates</p>
                  </div>
                  <button 
                    type="button"
                    :class="[formData.smsNotifications ? 'bg-teal-500' : 'bg-gray-200']"
                    class="relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
                    @click="formData.smsNotifications = !formData.smsNotifications"
                  >
                    <span
                      :class="[formData.smsNotifications ? 'translate-x-5' : 'translate-x-0']"
                      class="pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
                    />
                  </button>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="border-t border-gray-200 p-6 bg-gray-50 rounded-b-lg">
              <div class="flex justify-end space-x-4">
                <button
                  type="button"
                  @click="cancelChanges"
                  :disabled="isLoading"
                  class="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  :disabled="isLoading"
                  class="relative px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed min-w-[5rem]"
                >
                  <span :class="{ 'invisible': isLoading }">Save Changes</span>
                  <!-- Loading Spinner -->
                  <div
                    v-if="isLoading"
                    class="absolute inset-0 flex items-center justify-center"
                  >
                    <svg
                      class="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';


const isLoading = ref(false);

// Initial user data
const userData = reactive({
  fullName: 'John Doe',
  displayName: 'johndoe',
  email: 'john@example.com',
  phone: '+1234567890',
  phoneVerified: false,
  avatar: '/default-avatar.jpg',
  joinDate: 'January 2024',
  emailNotifications: true,
  smsNotifications: false
});

// Form data
const formData = reactive({
  ...userData
});

// Password change data
const passwordData = reactive({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

// UI state
const showPasswordChange = ref(false);
const avatarPreview = ref(null);

// Password strength checker
const passwordStrength = computed(() => ({
  length: passwordData.newPassword.length >= 8,
  uppercase: /[A-Z]/.test(passwordData.newPassword),
  number: /[0-9]/.test(passwordData.newPassword)
}));

// Methods
const handleAvatarChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      avatarPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const togglePasswordChange = () => {
  showPasswordChange.value = !showPasswordChange.value;
  if (!showPasswordChange.value) {
    passwordData.currentPassword = '';
    passwordData.newPassword = '';
    passwordData.confirmPassword = '';
  }
};
const saveChanges = async () => {
  if (isLoading.value) return;

  try {
    isLoading.value = true;

    if (showPasswordChange.value) {
      // Validate password requirements
      if (!Object.values(passwordStrength.value).every(Boolean)) {
        alert('Please meet all password requirements');
        return;
      }
      if (passwordData.newPassword !== passwordData.confirmPassword) {
        alert('New passwords do not match');
        return;
      }
    }

    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would make your actual API call to save changes
    Object.assign(userData, formData);
    if (avatarPreview.value) {
      userData.avatar = avatarPreview.value;
    }

    alert('Changes saved successfully!');
    showPasswordChange.value = false;
  } catch (error) {
    alert('Error saving changes');
    console.error(error);
  } finally {
    isLoading.value = false;
  }
};

const cancelChanges = () => {
  if (isLoading.value) return;
  
  Object.assign(formData, userData);
  avatarPreview.value = null;
  showPasswordChange.value = false;
  passwordData.currentPassword = '';
  passwordData.newPassword = '';
  passwordData.confirmPassword = '';
};
</script>