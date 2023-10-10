import {createRouter,createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {path: '/',redirect: '/trainers'},
       {path: '/trainers',component: null},
       {path: '/trainers/:id',component: null,children: [
         {path: '/contact',component: null} //trainer/tID/contact
       ]},
       {path: '/register',component: null},
       {path: '/requests',component: null},
       {path: '/:notFound(.*)', component:null}
    ]
})

export default router