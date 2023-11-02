export default {
   async contactPets(context,payload){
        const requestsData = {
            petsId: payload.petsId,
            userEmail: payload.email,
            message: payload.message,
            phoneNumber: payload.phoneNumber
        }

       const response = await fetch(`https://petapp-88f07-default-rtdb.europe-west1.firebasedatabase.app/messages/${payload.petsId}.json`,{
            method: 'POST',
            body: JSON.stringify(requestsData)
        })

        const responseData = await response.json()

        requestsData.id = requestsData.name

        if(!response.ok){
            const error = new Error(requestsData.message || 'Failed to fetch')
            throw error
        }

        context.commit('addMessages',requestsData)
    }
}