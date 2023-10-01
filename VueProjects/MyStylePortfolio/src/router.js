import { createRouter,createWebHistory } from "vue-router";
import PortHome from './components/PortHome.vue'
import PortAbout from './components/PortAbout.vue'
import PortService from './components/PortService.vue'
import PortContact from './components/PortContact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/home'},
        { path: '/home', component: PortHome },
        { path: '/about', component: PortAbout },
        { path: '/services', component: PortService },
        { path: '/contact', component: PortContact },
    ]
})

export default router