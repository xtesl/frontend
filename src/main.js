import './assets/main.css'
import 'primeicons/primeicons.css'
import 'aos/dist/aos.css';


import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores'
import VueLazyload from 'vue-lazyload'
import AOS from 'aos';

const app = createApp(App);
const pinia = createPinia();

// Middleware setup
app.use(VueLazyload);
app.use(pinia);
app.use(router);

AOS.init();

const initializeApp = async () => {
  const authStore = useAuthStore();
   await authStore.checkUserState();
  app.mount("#app"); // Mount app after session check
};

initializeApp();
