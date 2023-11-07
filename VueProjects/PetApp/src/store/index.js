import { createStore } from "vuex";

import petsModule from './modules/pets/index.js'
import messageModule from './modules/messages/index.js'
import authModule from './modules/auth/index.js'

const store = createStore({
    modules: {
     pets: petsModule,
     messages: messageModule,
     auth: authModule
    },

})

export default store