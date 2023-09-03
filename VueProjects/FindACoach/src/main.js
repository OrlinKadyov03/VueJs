import { createApp,defineAsyncComponent } from 'vue';
import App from './App.vue';
import store from './store/index.js'
import router from './routes.js'
import BaseCard from '../src/components/ui/BaseCard.vue'
import BaseButton from '../src/components/ui/BaseButton.vue'
import BaseBadge from '../src/components/ui/BaseBadge.vue'
import BaseSpinner from '../src/components/ui/BaseSpinner.vue'
//import BaseDialog from '../src/components/ui/BaseDialog.vue'

const BaseDialog = defineAsyncComponent(() => import('../src/components/ui/BaseDialog.vue'))


const app = createApp(App)

app.use(router)
app.use(store)

app.component('base-card',BaseCard)
app.component('base-button',BaseButton)
app.component('base-badge',BaseBadge)
app.component('base-spinner',BaseSpinner)
app.component('base-dialog',BaseDialog)

app.mount('#app');

