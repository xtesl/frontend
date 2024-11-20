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

// Initialise validation state
// const authStore = useAuthStore();
// authStore.fetchUser();

app.use(router);
app.use(pinia)
app.use(VueLazyload)
app.mount("#app");

