import { createRouter,createWebHistory} from 'vue-router'
import HomeComponent from './components/HomeComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/home', component: HomeComponent},
    ]
})

export default router