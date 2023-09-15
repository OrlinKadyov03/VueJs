import { createStore } from "vuex";

import racersModules from './modules/racers/index.js'
import requestsModules from "./modules/requests/index.js";
import authModules from "./modules/auth/index.js"

const store = createStore({
  modules: {
    racers: racersModules,
    requests: requestsModules,
    auth: authModules 
  },
  state(){
    return {
      racerId: 'r3'
    }
  },
})

export default store