import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const counterStore = ({
    namespaced: true,
    state(){
        return {
            counter: 0,
        }
    },
    mutations: {
        increment(state){
            state.counter += 2
         },
         increase(state,payload){
             state.counter += payload.value
         },
    },
    actions: {
        increment(context){
            setTimeout(function(){
             context.commit('increment')
            },2000)
         },
         increase(context,payload){
             context.commit('increase',payload)
         },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3
          },
          normalizedCounter(_,getters){
           const finalCounter = getters.finalCounter
           if(finalCounter < 0){
              return 0
           }
           if(finalCounter > 100){
              return 100
           }
           return finalCounter
          },
    }
})

const store = createStore({
    modules: {
      numbers: counterStore
    },
    state(){
        return {
          isLogged: false
        }
    },
    mutations: {
        Auth(state,payload){
            state.isLogged = payload.value
        }
    },
    actions: {
        login(context){
            context.commit('Auth', {value: true})
        },
        logout(context){
            context.commit('Auth', {value: false})
        }
    },
    getters: {
        AuthGet(state){
           return state.isLogged
        }

    }
})

const app = createApp(App);

app.use(store)

app.mount('#app');

