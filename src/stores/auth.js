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
                const response = await apiClient.get("/user/me")
                this.isAuthenticated = true;
                this.user = response.data;
             } catch (error) {
                this.isAuthenticated = false;
                this.user = null;
             }
           
        },

        async logout() {
            try {
                 await apiClient.post("auth/logout");
            } catch (error) {
                //
            }finally{
                this.isAuthenticated = false;
                this.user = null;
            }
           
           
        }
    }
});