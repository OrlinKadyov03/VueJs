export default {
    setRacer(state,payload) {
       state.token = payload.token
       state.racerId = payload.racerId
       state.didAutoLogout = false
    },
    didAutoLogout(state){
        state.didAutoLogout = true
    }
}