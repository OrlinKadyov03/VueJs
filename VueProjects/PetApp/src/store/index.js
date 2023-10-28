import { createStore } from "vuex";

import petsModule from './modules/pets/index.js'

const store = createStore({
    modules: {
     pets: petsModule
    },
    state(){
        return {
            userId: 't3'
        }
    },
    getters: {
        userId(state){
            return state.userId
        }
    }
})

export default store