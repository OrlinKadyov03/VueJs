import { createRouter,createWebHistory } from 'vue-router'

import RacersContact from './components/pages/requests/RacersContact.vue'
import RacersDetails from './components/pages/racers/RacersDetails.vue'
import RacersList from './components/pages/racers/RacersList.vue'
import RacersRegistration from './components/pages/racers/RacersRegistration.vue'
import RequestsReceived from './components/pages/requests/RequestsReceived.vue'
import NotFound from './components/NotFound.vue'
import UserAuth from './components/pages/auth/UserAuth.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/racers'},
        { path: '/racers',component: RacersList },
        { path: '/racers/:id',component: RacersDetails,
        props: true,children: [
          { path: 'contact',component: RacersContact} // /racers/r1/contact
        ]},
        { path: '/register',component: RacersRegistration},
        { path: '/requests',component: RequestsReceived},
        { path: '/auth',component: UserAuth },
        { path: '/:notFound(.*)',component: NotFound}
    ]
})

export default router