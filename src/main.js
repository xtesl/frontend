import './assets/main.css'
import 'primeicons/primeicons.css'

import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores'
import VueLazyload from 'vue-lazyload'

const app = createApp(App);
const pinia = createPinia();

// Middleware setup
app.use(VueLazyload);
app.use(pinia);
app.use(router);

const initializeApp = async () => {
  const authStore = useAuthStore();
  await authStore.fetchUser(); // Wait for fetchUser to complete
  app.mount("#app"); // Mount app after session check
};

initializeApp();
