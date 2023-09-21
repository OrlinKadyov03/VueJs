import { createRouter,createWebHistory } from 'vue-router'
import About from './components/portfolio/About.vue'
import Contact from './components/portfolio/Contact.vue'
import Home from './components/portfolio/Home.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Services from './components/portfolio/Services.vue'

const router = createRouter({
    history: createWebHistory(),
    router: [
        {path: '/home',component: Home},
        {path: '/about',component: About},
        {path: '/services',component: Services},
        {path: '/portfolio',component: Portfolio},
        {path: '/contact',component: Contact}
    ]
})


export default router