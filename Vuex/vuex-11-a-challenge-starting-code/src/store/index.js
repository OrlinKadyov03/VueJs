import { createStore } from 'vuex'

import productsModule from './modules/products.js'
import cartModule from './modules/cart.js'

const store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    },
    state(){
        return{
            isLoggedIn: false
        }
    },
    mutations: {
        LogIn(state,payload){
            state.isLoggedIn = payload.Logged
        }
    },
    getters: {
        UserAuthenticated(state){
            return state.isLoggedIn
        }
    },
    actions: {
        LogIn(context){
            context.commit('LogIn',{Logged:true})
        },
        LogOut(context){
            context.commit('LogIn',{Logged:false})
        }
    }
})

export default store
