import { createRouter,createWebHistory } from 'vue-router'

import RacersContact from './components/pages/requests/RacersContact.vue'
import RacersDetails from './components/pages/racers/RacersDetails.vue'
import RacersList from './components/pages/racers/RacersList.vue'
import RacersRegistration from './components/pages/racers/RacersRegistration.vue'
import RequestsReceived from './components/pages/requests/RequestsReceived.vue'
import NotFound from './components/NotFound.vue'
import UserAuth from './components/pages/auth/UserAuth.vue'
import store from './components/store/index.js'
import RacerAbout from './components/racers/RacerAbout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/racers'},
        { path: '/racers',component: RacersList },
        { path: '/racers/:id',component: RacersDetails,
        props: true,children: [
          { path: 'contact',component: RacersContact} // /racers/r1/contact
        ]},
        { path: '/register',component: RacersRegistration, meta: {requiresAuth: true}},
        { path: '/requests',component: RequestsReceived,  meta: {requiresAuth: true}},
        { path: '/auth',component: UserAuth,  meta: {requiresUnauth: true} },
        { path: '/:notFound(.*)',component: NotFound},
        { path: '/about',component: RacerAbout }
    ]
})


router.beforeEach(function(to,_,next){
  if(to.meta.requiresAuth && !store.getters.isAuthenticated ){
    next('/auth')
  } else if(to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/racers')
  } else {
    next()
  }
})

export default router