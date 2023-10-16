import { createStore } from "vuex";

import trainersModule from './modules/trainers/index.js'

const store = createStore({
    modules: {
        trainers: trainersModule
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