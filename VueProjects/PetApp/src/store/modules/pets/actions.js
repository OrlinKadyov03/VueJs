export default {
    registerPet(context,data){
        const formData = {
            id: 'p4',
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