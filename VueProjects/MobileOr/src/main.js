import { createApp } from 'vue'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue'
import router from './router.js'

const app = createApp(App)

app.component('base-card',BaseCard)

app.use(router)
app.mount('#app')
