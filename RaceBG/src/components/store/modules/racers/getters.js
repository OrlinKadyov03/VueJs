export default {
    racers(state){
        return state.racers
    },
    hasRacers(state){
        return state.racers && state.racers.length > 0
    },
    isRacer(_,getters,_2,rootGetters){
       const racers = getters.racers
       const racerId = rootGetters.racerId
       return racers.some(racer => racer.id === racerId)
    }
}