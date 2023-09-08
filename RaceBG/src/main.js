import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './components/store/index.js'
import BaseButton from './components/ui/BaseButton.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseBadge from './components/ui/BaseBadge.vue'

const app = createApp(App)

app.use(router)
app.use(store)


app.component('base-button',BaseButton)
app.component('base-card',BaseCard)
app.component('base-badge',BaseBadge)

app.mount('#app')