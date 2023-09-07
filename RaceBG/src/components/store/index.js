import { createStore } from "vuex";

import racersModules from './modules/racers/index.js'

const store = createStore({
  modules: {
    racers: racersModules
  }
})

export default store