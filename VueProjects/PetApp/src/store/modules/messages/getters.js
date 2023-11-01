export default {
    messages(state,_,_2,rootGetters){
        const petId = rootGetters.userId
        return state.messages.filter(req => req.petId === petId)
    },
    hasMessages(_,getters){
        return getters.messages && getters.messages.length > 0
    }
}