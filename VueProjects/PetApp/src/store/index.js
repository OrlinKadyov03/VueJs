import { createStore } from "vuex";

import petsModule from './modules/pets/index.js'
import messageModule from './modules/messages/index.js'

const store = createStore({
    modules: {
     pets: petsModule,
     message: messageModule
    },
    state(){
        return {
            userId: 'p3'
        }
    },
    getters: {
        userId(state){
            return state.userId
        }
    }
})

export default store