<script setup>
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import LoginForm from './components/authForms/LoginForm.vue';
import SignupForm from './components/authForms/SignupForm.vue';
import { ref } from 'vue';

// Modal visibility control
const showLoginModal = ref(false);
const showSignUpModal = ref(false);

// Join and Sign in buttons visiblity control
const isAuthenticated = ref(false);

</script>

<template>
<Navbar @open-login="showLoginModal = true" 
@open-signup="showSignUpModal = true"  
:isAuthenticated="isAuthenticated"
@signout="isAuthenticated = false"  />

<LoginForm :show="showLoginModal" 
@close="showLoginModal = false" 
@loginSuccess="isAuthenticated = true"
@switchToSignup="showLoginModal = false; showSignUpModal = true" />

<SignupForm  :show="showSignUpModal" 
@close="showSignUpModal = false" 
@switchToLogin="showLoginModal = true; showSignUpModal = false" />
<RouterView />
<Footer />
</template>