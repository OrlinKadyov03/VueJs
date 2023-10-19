export default {
    requests(state,getters,rootState,rootGetters){
       return state.requests
    },
    hasRequests(state){
        return state.requests && state.requests.length > 0
    }
}