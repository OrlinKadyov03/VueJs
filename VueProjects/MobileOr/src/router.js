import { createRouter,createWebHistory} from 'vue-router'
import PublicationComponent from './components/PublicationComponent.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/publication', component: PublicationComponent}
    ]
})

export default router