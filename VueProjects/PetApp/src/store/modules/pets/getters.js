export default {
    pets(state){
        return state.pets
    },
    hasPets(state){
        return state.pets && state.pets.length > 0
    },
    isPets(_,getters,_2,rootGetters){
        const pets = getters.pets
        const userId = rootGetters.userId
        return pets.some(pet => pet.id === userId)
    }
}