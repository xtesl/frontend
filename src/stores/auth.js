import { defineStore } from "pinia";
import apiClient from "@/api/axios";


export const useAuthStore = defineStore('auth',  {
    state: () => ({
        isAuthenticated: false,
        user: null
    }),
    actions: {
        async fetchUser() {

             try {
                const response = await apiClient.get("/user")
                console.log(response.data)
                this.isAuthenticated = true;
                this.user = response.data.user;
             } catch (error) {
                this.isAuthenticated = false;
                this.user = null;
             }
           
        },

        async logout() {
            //Backend call should be here
            // const response = await apiClient.post("/logout");
           this.isAuthenticated = false;
           this.user = null;
        }
    }
});