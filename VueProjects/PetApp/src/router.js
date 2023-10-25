import {createRouter,createWebHistory} from 'vue-router'
import PetsList from './components/pets/PetsList.vue'
import PetsDetails from './components/pets/PetsDetails.vue'
import PetsContact from './components/pets/PetsContact.vue'
import PetsRegister from './components/pages/pets/PetsRegister.vue'
import PetsRequests from './components/pages/requests/PetRequests.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {path: '/', redirect: '/pets'},
    {path: '/pets',component: PetsList},
    {path: '/pets/:id',component: PetsDetails,
       props:true,children: [
         { path: 'contact',component: PetsContact } //pets/pId/contact
   ]},
    {path: '/register',component: PetsRegister},
    {path: '/requests',component: PetsRequests}  
  ]
})

export default router