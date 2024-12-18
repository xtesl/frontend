<script setup>
import { ref } from "vue";
import * as yup from "yup";
import { COMPANY_NAME } from "@/utils/constants";
import { useInteractionStore } from "@/stores";
import { Form, Field, ErrorMessage } from "vee-validate";
import apiClient from "@/api/axios";


const interactionStore = useInteractionStore();

const schema = yup.object({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

const props = defineProps(["show"]);
const emit = defineEmits(["close", "switchToLogin"]);

const acceptedTerms = ref(false);
const isLoading = ref(false);
const serverMessage = ref("");

const closeModal = () => {
  interactionStore.closeAuthModal("signup");
};

const switchToLogin = () => {
  emit("close");
  interactionStore.showSignupModal = false;
  interactionStore.showLoginModal = true;
};

const handleSubmit = async (validatedData) => {

   serverMessage.value = "Internal server error";
   console.log(validatedData)

  if (!acceptedTerms.value) {
    serverMessage.value = "You must accept the Terms and Conditions!";
    return;
  }

  serverMessage.value = "";
  isLoading.value = true;
  try {
    const response = await apiClient.post("/user/")
    serverMessage.value = response.data.message || "Sign-up successful!";
  } catch (error) {
    console.error("Error during sign-up:", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
<template>
  <div
    v-if="interactionStore.showSignupModal"
    class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-teal-100/50 to-teal-300/50"
  >
    <div
      class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 space-y-6 max-h-[90vh] overflow-y-auto border-t-4 border-teal-500"
    >
      <!-- Loading Overlay -->
      <div 
        v-if="isLoading" 
        class="absolute inset-0 bg-white bg-opacity-70 z-[999] flex items-center justify-center rounded-2xl"
      >
        <div class="spinner-border text-teal-500"></div>
      </div>

      <!-- Modal Content -->
      <RouterLink
        to="/"
        class="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900"
      >
        <img
          class="w-12 h-10 mr-2 rounded-full p-2"
          v-lazy="'/bloopra_logo.svg'"
          alt="logo"
        />
        <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
          {{ COMPANY_NAME }}
        </span>
      </RouterLink>

      <h1 class="text-2xl font-bold text-gray-900 text-center mb-4">
        Create an account
      </h1>

      <!-- Server Response Message -->
      <div v-if="serverMessage" class="text-center text-red-600 font-semibold bg-red-50 p-3 rounded-lg">
        {{ serverMessage }}
      </div>

      <!-- Social Sign-Up Buttons -->
      <div class="mt-4 space-y-4">
        <button
          class="flex items-center justify-center w-full p-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors group"
          :disabled="isLoading"
        >
          <img
            v-lazy="'/img/icons/common/google.svg'"
            alt="Google"
            class="w-6 h-6 mr-3"
          />
          <span class="text-gray-700 group-hover:text-teal-600 transition-colors">
            Sign up with Google
          </span>
        </button>
      </div>

      <!-- Divider -->
      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-white text-gray-500">
            Or sign up with email
          </span>
        </div>
      </div>

      <!-- Sign-Up Form -->
      <Form
        class="space-y-4"
        :validation-schema="schema"
        @submit="handleSubmit"
      >
        <!-- User Type Field -->
        <div class="relative">
          <label
            for="user-type"
            class="block mb-2 text-sm font-medium text-gray-900 flex items-center"
          >
            Account Type
            <div 
              class="ml-2 relative group cursor-help"
            >
              <i class="pi pi-info-circle text-gray-400 hover:text-teal-600 transition-colors"></i>
              <div 
                class="absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-gray-800 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              >
                <p class="text-xs">
                  • Freelancer: For professionals offering services
                  • Employer: For businesses or individuals hiring talent
                  Choose the account type that best describes you
                </p>
              </div>
            </div>
          </label>
          <Field
            as="select"
            name="userType"
            id="user-type"
            class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            :disabled="isLoading"
            required
          >
            <option value="" disabled selected>Select Account Type</option>
            <option value="freelancer">Freelancer</option>
            <option value="employer">Employer</option>
          </Field>
          <ErrorMessage name="userType" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold mt-1">
              <i class="pi pi-exclamation-circle mr-2 text-lg text-red-500"></i>
              {{ message }}
            </span>
          </ErrorMessage>
        </div>

        <!-- Email Field -->
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <Field
            type="email"
            id="email"
            name="email"
            class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="name@company.com"
            :disabled="isLoading"
          />
          <ErrorMessage name="email" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold mt-1">
              <i class="pi pi-exclamation-circle mr-2 text-lg text-red-500"></i>
              {{ message }}
            </span>
          </ErrorMessage>
        </div>

        <!-- Password Field -->
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <Field
            type="password"
            id="password"
            name="password"
            class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="••••••••"
            :disabled="isLoading"
          />
          <ErrorMessage name="password" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold mt-1">
              <i class="pi pi-exclamation-circle mr-2 text-lg text-red-500"></i>
              {{ message }}
            </span>
          </ErrorMessage>
        </div>

        <!-- Confirm Password Field -->
        <div>
          <label
            for="confirm-password"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Confirm password
          </label>
          <Field
            type="password"
            id="confirm-password"
            name="confirmPassword"
            class="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
            placeholder="••••••••"
            :disabled="isLoading"
          />
          <ErrorMessage name="confirmPassword" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold mt-1">
              <i class="pi pi-exclamation-circle mr-2 text-lg text-red-500"></i>
              {{ message }}
            </span>
          </ErrorMessage>
        </div>

        <!-- Terms and Conditions -->
        <div class="flex items-start mt-3">
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="acceptedTerms"
              class="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
              :disabled="isLoading"
            />
            <span class="ml-2 text-sm text-gray-500">
              I accept the
              <a 
                href="#" 
                class="font-medium text-teal-600 hover:text-teal-800 hover:underline transition-colors"
              >
                Terms and Conditions
              </a>
            </span>
          </label>
        </div>

        <!-- Sign-Up Button -->
        <button
          type="submit"
          class="w-full px-5 py-3 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg hover:from-teal-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-teal-300 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center"
          :disabled="isLoading || !acceptedTerms"
        >
          <span v-if="!isLoading">Create an account</span>
          <span v-else class="flex items-center">
            <svg class="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        </button>
      </Form>

      <!-- Login Link -->
      <p class="text-sm text-center text-gray-500 mt-6">
        Already have an account?
        <button
          @click="switchToLogin"
          class="font-medium text-teal-600 hover:text-teal-800 hover:underline transition-colors"
          :disabled="isLoading"
        >
          Login here
        </button>
      </p>

      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-white bg-gradient-to-r from-teal-500 to-blue-500
         hover:text-gray-500 transition-colors p-2 rounded-full"
        :disabled="isLoading"
      >
        ✕
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Spinner Animation */
.spinner-border {
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
  border-bottom-color: #3498db;
  border-width: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Optional: Focus and Hover States */
input:focus, 
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.3);
}

button:hover:not(:disabled) {
  opacity: 0.9;
}
</style>