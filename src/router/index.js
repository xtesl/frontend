import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import SignupView from "@/views/auth/SignupView.vue";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        }, 
        {
            path: "/jobs",
            name: "jobs",
            component: JobsView
        }, 
        {
            path: "/jobs/:id",
            name: "job",
            component: JobView

        },
        {
          path: "/jobs/add",
          name:"add-job",
          component: AddJobView
        },
        {
               path: "/auth/signin",
               name: "signin",
               component: LoginView
        },
        {
           path: "/auth/signup",
           name: "signup",
           component: SignupView
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFoundView,
        }
    ]
});


export default router;