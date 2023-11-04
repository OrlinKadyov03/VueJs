import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
    state(){
        return {
          counter: 0,
          isLogged: false
        }
    },
    mutations: {
        increment(state){
           state.counter += 2
        },
        increase(state,payload){
            state.counter += payload.value
        },
        Auth(state,payload){
            state.isLogged = payload.value
        }
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
        login(context){
            context.commit('Auth', {value: true})
        },
        logout(context){
            context.commit('Auth', {value: false})
        }
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
        AuthGet(state){
           return state.isLogged
        }

    }
})

const app = createApp(App);

app.use(store)

app.mount('#app');

