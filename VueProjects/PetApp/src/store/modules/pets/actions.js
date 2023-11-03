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
    },
    async loadPets(context,payload){

       if(!payload.forceRefresh && !context.getters.shouldUpdate){
        return
       }
        
       const response = await fetch(`https://petapp-88f07-default-rtdb.europe-west1.firebasedatabase.app/pets.json`)
       const responseData = await response.json()

       if(!response.ok){
         const error = new Error(responseData.message)
         throw error
       }
       const pets = []

       for(const key in responseData){
        const pet = {
            id: key,
            name: responseData[key].name,
            years: responseData[key].years,
            type: responseData[key].type,
            breed: responseData[key].breed,
            image: responseData[key].image,
            description: responseData[key].description
        }
        pets.push(pet)
       }

       context.commit('setPets',pets)
    }
}