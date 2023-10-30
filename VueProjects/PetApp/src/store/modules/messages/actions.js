export default {
    contactPets(context,payload){
        const requestsData = {
            id: new Date().toISOString(),
            petsId: payload.petsId,
            userEmail: payload.email,
            message: payload.message,
            phoneNumber: payload.phoneNumber
        }
        context.commit('addMessages',requestsData)
    }
}