export default {
    pets(state){
        return state.pets
    },
    hasPets(state){
        return state.pets && state.pets.length > 0
    }
}