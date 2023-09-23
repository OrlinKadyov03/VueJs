import { createRouter,createWebHistory } from "vue-router";
import PortHome from './components/ports/PortHome.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: PortHome}
    ]
})

export default router