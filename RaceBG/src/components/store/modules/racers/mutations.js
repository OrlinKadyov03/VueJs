export default {
    registerRacer(state,payload){
       state.racers.push(payload)
    },
    setRacers(state,payload){
      state.racers=payload
    },
    setFetchTimestamp(state) {
      state.lastFetch = new Date().getTime()
    }
}