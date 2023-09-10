import { createStore } from "vuex";

import racersModules from './modules/racers/index.js'
import requestsModules from "./modules/requests/index.js";

const store = createStore({
  modules: {
    racers: racersModules,
    requests: requestsModules
  },
  state(){
    return {
      racerId: 'r3'
    }
  },
  getters: {
    racerId(state){
      return state.racerId
    }
  }
})

export default store