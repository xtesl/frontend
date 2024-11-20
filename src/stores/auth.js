import { defineStore } from "pinia";
import axios from "axios";


export const useAuthStore = defineStore('auth',  {
    state: () => ({
        isAuthenticated: false,
        user: null
    }),
    actions: {
        async fetchUser() {

             try {
                const response = await axios.get('http://localhost:5000/users');
                this.isAuthenticated = true;
                this.user = response.data.user;
             } catch (error) {
                this.isAuthenticated = false;
                this.user = null;
             }
           
        },

        logout() {
            //Backend call should be here
            
           this.isAuthenticated = false;
           this.user = null;
        }
    }
});