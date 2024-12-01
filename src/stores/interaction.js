import { defineStore } from "pinia";

export const useInteractionStore = defineStore("interaction", {
  state: () => ({
    showLoginModal: false,
    showSignupModal: false,
  }),
  actions: {
      showAuthModal(authType) {
          if(authType == "login"){
             this.showLoginModal =  true;     
        }else{
            this.showSignupModal = true;
        }
      }, 

      closeAuthModal(authType) {
         if(authType == "login"){
            this.showLoginModal = false;
         }else{
            this.showSignupModal = false;

         }
      }
  }
});
