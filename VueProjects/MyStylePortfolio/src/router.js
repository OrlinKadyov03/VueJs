import { createRouter,createWebHistory } from "vue-router";
import PortHome from './components/PortHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/home', component: PortHome }
    ]
})

export default router