import {createRouter,createWebHistory} from 'vue-router'
import TrainersList from './components/trainers/TrainersList.vue'
import TrainersDetails from './components/trainers/TrainersDetails.vue'
import TrainersRegister from './components/trainers/TrainersRegister.vue'
import TrainersContact from './components/requests/TrainersContact.vue'
import RequestsReceived from './components/requests/RequestsReceived.vue'
import NotFound from './components/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {path: '/',redirect: '/trainers'},
       {path: '/trainers',component: TrainersList},
       {path: '/trainers/:id',component: TrainersDetails,children: [
         {path: 'contact',component: TrainersContact} //trainer/tID/contact
       ]},
       {path: '/register',component: TrainersRegister},
       {path: '/requests',component: RequestsReceived},
       {path: '/:notFound(.*)', component:NotFound}
    ]
})

export default router