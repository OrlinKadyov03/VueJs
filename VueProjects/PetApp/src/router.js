import {createRouter,createWebHistory} from 'vue-router'
import PetsList from './components/pets/PetsList.vue'
import PetsDetails from './components/pets/PetsDetails.vue'
import PetsContact from './components/pets/PetsContact.vue'
import PetsRegister from './components/pages/pets/PetsRegister.vue'
import PetsRequests from './components/pages/requests/PetRequests.vue'
import UserAuth from './components/pages/auth/UserAuth.vue'
import store from './store/index.js'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {path: '/', redirect: '/pets'},
    {path: '/pets',component: PetsList},
    {path: '/pets/:id',component: PetsDetails,
       props:true,children: [
         { path: 'contact',component: PetsContact } //pets/pId/contact
   ]},
    {path: '/register',component: PetsRegister,meta: {requiresAuth: true}},
    {path: '/auth', component: UserAuth,meta: {requiresUnauth: true}},
    {path: '/requests',component: PetsRequests,meta: {requiresAuth: true}}  
  ]
})

router.beforeEach(function(to,_,next){
   if(to.meta.requiresAuth && !store.getters.isAuthenticated) {
     next('/auth')
   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
     next('/pets')
   } else {
     next()
   }
})

export default router