export default {
    registerPet(context,data){
        const formData = {
            id: context.rootGetters.userId,
            name: data.name,
            years: data.years,
            type: data.type,
            breed: data.breed,
            image: data.image,
            description: data.description
        }
        context.commit('registerPet',formData)
    }
}