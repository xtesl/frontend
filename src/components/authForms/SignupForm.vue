<script setup>
import { ref } from "vue";
import * as yup from "yup";
import { Form, ErrorMessage, Field } from "vee-validate";

//Yup validation schema
const schema = yup.object({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
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

// Close modal function
const closeModal = () => {
  emit("close");
};

// Switch to login modal
const switchToLogin = () => {
  emit("close");
  emit("switchToLogin");
};

// Handle form submission
const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }
  console.log("Form submitted:", email.value, password.value);
  closeModal(); // Close modal after form submission
};

// Social signup actions
const signupWithGoogle = () => {
  console.log("Google signup triggered");
};

const signupWithX = () => {
  console.log("X signup triggered");
};
</script>
<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div
      @click.self="closeModal"
      class="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6 relative max-h-[90vh] overflow-y-auto" 
    >
      <RouterLink
        to="/"
        class="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900"
      >
        <img
          class="w-8 h-8 mr-2"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
          alt="logo"
        />
        Shelfie
      </RouterLink>

      <h1 class="text-xl font-bold text-gray-900 text-center">
        Create an account
      </h1>

      <!-- Social Signup Buttons -->
      <div class="mt-4 space-y-2">
        <button
          @click="signupWithGoogle"
          class="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <img
            src="/img/icons/common/google.svg"
            alt="Google"
            class="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>
      </div>

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
            >Your email</label
          >
          <Field
            type="email"
            id="email"
            name="email"
            class="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary"
            placeholder="name@company.com"
            required
          />
        </div>
        <ErrorMessage name="email" v-slot="{ message }">
          <span class="flex items-center text-red-500 font-semibold">
            <i class="pi pi-exclamation-circle mr-2 text-lg sm:text-base"></i>
            {{ message }}
          </span>
        </ErrorMessage>

        <!-- Password Field -->
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Password</label
          >
          <Field
            type="password"
            id="password"
            name="password"
            class="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary"
            placeholder="••••••••"
            required
          />
        </div>

        <ErrorMessage name="password" v-slot="{ message }">
          <span class="flex items-center text-red-500 font-semibold">
            <i class="pi pi-exclamation-circle mr-2 text-lg sm:text-base"></i>
            {{ message }}
          </span>
        </ErrorMessage>

        <!-- Confirm Password Field -->
        <div>
          <label
            for="confirm-password"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Confirm password</label
          >
          <Field
            type="password"
            id="confirm-password"
            name="confirmPassword"
            class="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary"
            placeholder="••••••••"
            required
          />
        </div>

        <ErrorMessage name="confirmPassword" v-slot="{ message }">
          <span class="flex items-center text-red-500 font-semibold">
            <i class="pi pi-exclamation-circle mr-2 text-lg sm:text-base"></i>
            {{ message }}
          </span>
        </ErrorMessage>

        <!-- Terms and Conditions -->
        <div class="flex items-start">
          <label class="flex items-center">
            <input
              type="checkbox"
              v-model="acceptedTerms"
              class="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
              required
            />
            <span class="ml-2 text-sm text-gray-500">
              I accept the
              <a href="#" class="font-medium text-secondary hover:underline"
                >Terms and Conditions</a
              >
            </span>
          </label>
        </div>

        <!-- Sign Up Button -->
        <button
          type="submit"
          class="w-full px-5 py-2.5 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-secondary"
        >
          Create an account
        </button>

        <!-- Login Link -->
        <p class="text-sm text-center text-gray-500">
          Already have an account?
          <button
            @click="switchToLogin"
            class="font-medium text-secondary hover:underline"
          >
            Login here
          </button>
        </p>
      </Form>

      <!-- Close Button -->
      <button
        @click="closeModal"
        class="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>
    </div>
  </div>
</template>
