export default {
    registerRacer(state,payload){
       state.racers.push(payload)
    },
    setCoaches(state,payload){
      state.racers=payload
    }
}