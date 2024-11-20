<script setup>
import { ref } from "vue";
import axios from "axios";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

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

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const acceptedTerms = ref(false);
const isLoading = ref(false);
const serverMessage = ref("");

const closeModal = () => {
  emit("close");
};

const switchToLogin = () => {
  emit("close");
  emit("switchToLogin");
};

const handleSubmit = async (values) => {
  if (!acceptedTerms.value) {
    serverMessage.value = "You must accept the Terms and Conditions!";
    return;
  }

  serverMessage.value = "";
  isLoading.value = true;
  try {
    const response = await axios.post("http://localhost:8000/api/auth/signup", values);
    serverMessage.value = response.data.message || "Sign-up successful!";
  } catch (error) {
    console.error("Error during sign-up:", error);
    serverMessage.value = error.response?.data?.message || "An error occurred during sign-up.";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      class="relative w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6 max-h-[90vh] overflow-y-auto"
    >
      <!-- Loading Overlay -->
      <div 
        v-if="isLoading" 
        class="absolute inset-0 bg-white bg-opacity-70 z-[999] flex items-center justify-center rounded-lg"
      >
        <div class="spinner-border"></div>
      </div>

      <!-- Modal Content -->
      <RouterLink
        to="/"
        class="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900"
      >
        <img
          class="w-8 h-8 mr-2"
          v-lazy="'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'"
          alt="logo"
        />
        Shelfie
      </RouterLink>

      <h1 class="text-xl font-bold text-gray-900 text-center">
        Create an account
      </h1>

      <!-- Server Response Message -->
      <div v-if="serverMessage" class="text-center text-gray-600 font-semibold">
        {{ serverMessage }}
      </div>

      <!-- Social Sign-Up Buttons -->
      <div class="mt-4 space-y-2">
        <button
          class="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          :disabled="isLoading"
        >
          <img
            v-lazy="'/img/icons/common/google.svg'"
            alt="Google"
            class="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
      </div>

      <!-- Sign-Up Form -->
      <Form
        class="space-y-4"
        :validation-schema="schema"
        @submit="handleSubmit"
      >
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
            class="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary"
            placeholder="name@company.com"
            :disabled="isLoading"
          />
          <ErrorMessage name="email" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold mt-1">
              <i class="pi pi-exclamation-circle mr-2 text-lg sm:text-base"></i>
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
            class="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary"
            placeholder="••••••••"
            :disabled="isLoading"
          />
          <ErrorMessage name="password" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold mt-1">
              <i class="pi pi-exclamation-circle mr-2 text-lg sm:text-base"></i>
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
            class="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary"
            placeholder="••••••••"
            :disabled="isLoading"
          />
          <ErrorMessage name="confirmPassword" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold mt-1">
              <i class="pi pi-exclamation-circle mr-2 text-lg sm:text-base"></i>
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
              class="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
              :disabled="isLoading"
            />
            <span class="ml-2 text-sm text-gray-500">
              I accept the
              <a href="#" class="font-medium text-secondary hover:underline">
                Terms and Conditions
              </a>
            </span>
          </label>
        </div>

        <!-- Sign-Up Button -->
        <button
          type="submit"
          class="w-full px-5 py-2.5 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-secondary flex items-center justify-center"
          :disabled="isLoading || !acceptedTerms"
        >
          <span v-if="!isLoading">Create an account</span>
          <span v-else>Processing...</span>
        </button>
      </Form>

      <!-- Login Link -->
      <p class="text-sm text-center text-gray-500 mt-4">
        Already have an account?
        <button
          @click="switchToLogin"
          class="font-medium text-secondary hover:underline"
          :disabled="isLoading"
        >
          Login here
        </button>
      </p>

      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
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