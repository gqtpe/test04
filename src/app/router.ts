import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import Users from "@/features/Users/Users.vue";
import User from "@/features/Users/User.vue";

const routes = [
    { path: '/', component: Users },
    { path: '/user/:id', component: User },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router