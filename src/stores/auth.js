import { defineStore } from "pinia";
import apiClient from "@/api/axios";


export const useAuthStore = defineStore('auth',  {
    state: () => ({
        isAuthenticated: false,
        user: null
    }),
    actions: {
        async checkUserState() {

             try {
                const response = await apiClient.post("/auth/verifyToken");
                console.log(response.status)
                if (response.status == 204){
                    console.log("Active")
                    this.isAuthenticated = true;
                }
                
             } catch (error) {
                console.log(error.response.data.detail)
                this.isAuthenticated = false;
                
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