export default {
    registerPet(state,payload){
        state.pets.push(payload)
    },
    setPets(state,payload){
        state.pets = payload
    }
}