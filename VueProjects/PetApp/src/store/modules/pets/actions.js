export default {
    async registerPet(context,data){
        const userId = context.rootGetters.userId
        const formData = {
            id: context.rootGetters.userId,
            name: data.name,
            years: data.years,
            type: data.type,
            breed: data.breed,
            image: data.image,
            description: data.description
        }

        const response = await fetch(`https://petapp-88f07-default-rtdb.europe-west1.firebasedatabase.app/pets/${userId}.json`,{
            method: 'PUT',
            body: JSON.stringify(formData)
        })

        if(!response.ok){
            //error
        }

        context.commit('registerPet',{
            ...formData,
            id: userId
        })
    }
}