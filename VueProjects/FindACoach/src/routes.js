import {createRouter,createWebHistory} from 'vue-router'
//import CoachesDetails from './pages/coaches/CoachesDetails.vue'
import CoachesList from './pages/coaches/CoachesList.vue'
//import CoachesRegister from './pages/coaches/CoachesRegister.vue'
//import ContactCoach from './pages/requests/ContactCoach.vue'
//import RequestReceived from './pages/requests/RequestReceived.vue'
import NotFound from './pages/NotFound.vue'
//import UserAuth from './pages/auth/UserAuth.vue'
import store from './store/index.js'

const CoachesDetails = () => import('./pages/coaches/CoachesDetails.vue')
const CoachesRegister = () => import('./pages/coaches/CoachesRegister.vue')
const ContactCoach = () => import('./pages/requests/ContactCoach.vue')
const RequestReceived = () => import('./pages/requests/RequestReceived.vue')
const UserAuth = () => import('./pages/auth/UserAuth.vue')

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/',redirect: '/coaches' },
        { path: '/coaches',component: CoachesList },
        { 
            path: '/coaches/:id',component: CoachesDetails,
            props: true,
            children: [{path: 'contact', component: ContactCoach }]},

        { path: '/register',component: CoachesRegister,meta: {requiresAuth: true} },
        { path: '/requests',component: RequestReceived,meta: {requiresAuth: true} },
        { path: '/auth',component: UserAuth,meta: {requiresUnauth: true}},
        { path: '/:notFound(.*)',component: NotFound }
    ]
})

router.beforeEach(function (to,_,next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/auth')
    }else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/coaches')
    }else {
        next()
    }
})

export default router