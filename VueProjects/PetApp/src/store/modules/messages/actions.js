export default {
   async contactPets(context,payload){
        const requestsData = {
            userEmail: payload.email,
            message: payload.message,
            phoneNumber: payload.phoneNumber
        }


       const response = await fetch(`https://petapp-88f07-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.petsId}.json`,{
            method: 'POST',
            body: JSON.stringify(requestsData)
        })

        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to fetch')
            throw error
        }

              
        requestsData.id = responseData.name
        requestsData.petsId = payload.petsId
 

        context.commit('addMessages',requestsData)
    },
    async fetchMessages(context){
        const token = context.rootGetters.token
        const petsId = context.rootGetters.userId
        const response = await fetch(`https://petapp-88f07-default-rtdb.europe-west1.firebasedatabase.app/requests/${petsId}.json?auth=` + token )
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to fetch')
            throw error
        }

        const messages = []

        for(const key in responseData){
            const request = {
                id: key,
                petsId: petsId,
                email: responseData[key].userEmail,
                message: responseData[key].message,
                phoneNumber: responseData[key].phoneNumber
            }
            messages.push(request)
        }
        context.commit('setMessages',messages)
    }
    
}