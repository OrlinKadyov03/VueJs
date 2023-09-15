export default {
    setRacer(state,payload) {
       state.token = payload.token
       state.racerId = payload.racerId,
       state.tokenExpiration = payload.tokenExpiration
    }
}