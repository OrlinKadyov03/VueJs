import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUser from './pages/AllUser.vue'
import CourseGoal from './pages/CourseGoal.vue'

const app = createApp(App);

app.component('base-modal', BaseModal);

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/',component: AllUser},
        {path: '/goals',component: CourseGoal}
    ]
})

app.use(router)

router.isReady().then(function() {
 
    app.mount('#app');

});

