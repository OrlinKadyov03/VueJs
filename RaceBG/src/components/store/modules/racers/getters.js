export default {
    racers(state){
        return state.racers
    },
    hasRacers(state){
        return state.racers && state.racers.length > 0
    }
}