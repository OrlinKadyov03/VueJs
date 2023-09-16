export default {
        racerId(state){
          return state.racerId
        },
        token(state){
          return state.token
        },
        isAuthenticated(state){
          return !!state.token
        }
}