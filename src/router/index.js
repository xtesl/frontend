import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SchoolListView from "@/views/school/SchoolListView.vue";
import CategoryView from "@/views/category/CategoryView.vue";
import JobsView from "@/views/job/JobsView.vue";
import { useAuthStore } from "@/stores";


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        }, 
        {
          path: "/institutions",
          name: "institutions",
          component: SchoolListView
        },
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView,
            meta: {requiresAuth: true}
         },
        {
            path: "/categories/:category",
            name: "categories",
            component: CategoryView
          },
        
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView,
        }
    ],

    scrollBehavior(to, from, savedPosition) {
        // Check if there's a saved position (e.g., from browser history)
        if (savedPosition) {
          return savedPosition;
        }
    
        // Determine scroll position based on the route or some condition
        if (to.hash) {
          return { selector: to.hash }; // Scroll to an element with a specific id (if any)
        }
    
        // Scroll to the top by default
        return { top: 0 };
      },
});


// Global navigation guard
// router.beforeEach((to, from, next) => {
//      const authStore = useAuthStore();
//      if(to.meta.requiresAuth && !authStore.isAuthenticated){
//         next({ name: "home"});
//      }else{
//         next();
//      }
// });

export default router;