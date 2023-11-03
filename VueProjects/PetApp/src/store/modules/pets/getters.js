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
    },
    shouldUpdate(state){
        const lastFetch = state.lastFetch
        if(!lastFetch){
          return true
        }
        const currentTimeStamp = new Date().getTime()
        return (currentTimeStamp-lastFetch) / 1000 > 60
      }
}