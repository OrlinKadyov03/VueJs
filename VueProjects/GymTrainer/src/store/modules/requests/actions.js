export default {
   async contactTrainer(context,payload){
       const requestsData = {
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
       requestsData.trainerId = payload.trainerId


       context.commit('addRequests',requestsData)
    },
   async fetchRequests(context){
     const trainerId = context.rootGetters.trainerId
     const response = await fetch(`https://gymcoach-a8d73-default-rtdb.europe-west1.firebasedatabase.app/requests/${trainerId}.json`)
     const responseData = await response.json()

     if(!response.ok){
      const error = new error(requestsData.message || 'Failed to fetch')
      throw error
     }

     const requests = []

     for(const key in responseData){
      const request = {
        id:key,
        trainerId:trainerId,
        userEmail: responseData[key].userEmail,
        message: responseData[key].message
      }
      requests.push(request)
     }

     context.commit('setRequests',requests)
    }
}