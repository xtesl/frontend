<script setup>
import { ref, computed } from "vue";

import * as yup from "yup";

import { Form, ErrorMessage, Field, useField } from "vee-validate";

// Yup validation schema

const schema = yup.object({
  email: yup.string().email().required("Email is required"),

  password: yup.string().required("Password is required"),
});

const props = defineProps(["show"]);

const emit = defineEmits(["close"]);

// Close the modal

const closeModal = () => {
  emit("close");
};

// Handle form submission

const handleSubmit = (values) => {
  console.log(values); // Log the values for debugging

  closeModal(); // Close the modal after submission
};

// Switch to signup modal

const switchToSignup = () => {
  emit("close");

  emit("switchToSignup");
};

// Social login actions

const loginWithGoogle = () => {
  console.log("Google login triggered");
};

// Set up fields and error messages

const { value: email, errorMessage: emailError } = useField("email");

const { value: password, errorMessage: passwordError } = useField("password");

// Track invalid states for conditional styling

const isEmailInvalid = computed(() => !!emailError.value);

const isPasswordInvalid = computed(() => !!passwordError.value);
</script>

<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <!-- Modal container with max-height and scrollable overflow -->
    <div
      @click.self="closeModal"
      class="w-full max-w-md bg-white rounded-lg shadow-lg p-6 space-y-6 relative overflow-y-auto"
      style="max-height: 80vh"
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
        Sign in to your account
      </h1>

      <!-- Social Login Buttons -->
      <div class="mt-4 space-y-2">
        <button
          @click="loginWithGoogle"
          class="flex items-center justify-center w-full p-2 border border-gray-300 rounded-lg hover:bg-gray-100"
        >
          <img
            src="/img/icons/common/google.svg"
            alt="Google"
            class="w-5 h-5 mr-2"
          />
          Sign in with Google
        </button>
      </div>

      <Form
        class="space-y-4"
        :validation-schema="schema"
        @submit="handleSubmit"
        :validate-on-blur="true"
        :validate-on-change="true"
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
            placeholder="name@company.com"
            required
            :class="{
              'w-full p-2.5 border rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary': true,
              'border-red-500': isEmailInvalid,
            }"
          />
          <ErrorMessage name="email" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold">
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
            >Password</label
          >
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="•••••••• "
            required
            :class="{
              'w-full p-2.5 border rounded-lg bg-gray-50 text-gray-900 focus:ring-secondary focus:border-secondary': true,
              'border-red-500': isPasswordInvalid,
            }"
          />
          <ErrorMessage name="password" v-slot="{ message }">
            <span class="flex items-center text-red-500 font-semibold">
              <i class="pi pi-exclamation-circle mr-2 text-lg sm:text-base"></i>
              {{ message }}
            </span>
          </ErrorMessage>
        </div>

        <!-- Remember Me and Forgot Password -->
        <div class="flex items-center justify-between">
          <label class="flex items-center">
            <input
              type="checkbox"
              class="w-4 h-4 text-secondary border-gray-300 rounded focus:ring-secondary"
            />
            <span class="ml-2 text-sm text-gray-500">Remember me</span>
          </label>
          <a href="#" class="text-sm font-medium text-secondary hover:underline"
            >Forgot password?</a
          >
        </div>

        <!-- Sign In Button -->
        <button
          type="submit"
          class="w-full px-5 py-2.5 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-secondary"
        >
          Sign in
        </button>

        <!-- Signup Link -->
        <p class="text-sm text-center text-gray-500">
          Don’t have an account yet?
          <button
            @click="switchToSignup"
            class="font-medium text-secondary hover:underline"
          >
            Sign up
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
