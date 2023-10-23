export default {
   async contactTrainer(context,payload){
       const requestsData = {
         trainerId: payload.trainerId,
         userEmail: payload.email,
         message: payload.message
       }

        const response = await fetch(`https://gymcoach-a8d73-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.trainerId}.json`,{
        method: 'POST',
        body: JSON.stringify(requestsData)
       })

      const responseData = await response.json()

       if(!response.ok){
        const error = new error(requestsData.message || 'Failed to fetch')
        throw error
       }

       
       requestsData.id = responseData.name


       context.commit('addRequests',requestsData)
    }
}