export default {
   async contactTrainer(context,payload){
       const requestsData = {
         trainerId: payload.trainerId,
         userEmail: payload.email,
         message: payload.message
       }

       fetch(`https://gymcoach-a8d73-default-rtdb.europe-west1.firebasedatabase.app/${this.trainerId}.json`,{
        method: 'POST',
        body: JSON.stringify(requestsData)
       })

       const responseData = await response.json()

       requestsData.id = requestsData.name

       if(!response.ok){
        const error = new error(error.message || 'Failed to fetch')
        throw error
       }


       context.commit('addRequests',requestsData)
    }
}