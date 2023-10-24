import { createStore } from "vuex";

import petsModule from './modules/pets/index.js'

const store = createStore({
    modules: {
     pets: petsModule
    },
})

export default store