import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import SchoolListView from "@/views/school/SchoolListView.vue";
import CategoryView from "@/views/category/CategoryView.vue";

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
            path: "/categories/:category",
            name: "categories",
            component: CategoryView
          },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView,
        }
    ]
});


export default router;