export default {
    requests(state,_,_2,rootGetters){
      const racerId = rootGetters.racerId
      return state.requests.filter(req=> req.racerId === racerId)
    },
    hasRequests(_,getters){
      return getters.requests && getters.requests.length > 0
    }
}