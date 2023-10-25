import {createRouter,createWebHistory} from 'vue-router'
import PetsList from './components/pets/PetsList.vue'
import PetsDetails from './components/pets/PetsDetails.vue'
import PetsContact from './components/pets/PetsContact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
    {path: '/pets',component: PetsList},
    {path: '/pets/:id',component: PetsDetails,
       props:true,children: [
         { path: 'contact',component: PetsContact } //pets/pId/contact
   ]},
  ]
})

export default router