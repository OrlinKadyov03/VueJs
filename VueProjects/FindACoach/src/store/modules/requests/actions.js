export default {
  async contactCoach(context,payload){
      const newRequest = {
        userEmail: payload.email,
        userMessage: payload.message
      }
      const response = await fetch(`https://vue-coach-store-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,{
         method: 'POST',
         body: JSON.stringify(newRequest)
      })

      const resData = await response.json()

      if(!response.ok){
         const error = new Error(resData.message || 'Failed to send request.')
         throw error
      }

      newRequest.id = resData.name
      newRequest.coachId = payload.coachId

      context.commit('addRequest', newRequest)
   },
   async fetchRequests(context){
     const coachId = context.rootGetters.userId
     const response = await fetch(`https://vue-coach-store-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`)
     const resData = await response.json()

     if(!response.ok){
      const error = new Error(resData.message || 'Failed to send request.')
      throw error
     }

     const requests = []
     for(const key in resData){
      const request = {
         id:key,
         coachId: coachId,
         userEmail: resData[key].userEmail,
         userMessage: resData[key].userMessage
      }
      requests.push(request)
     }

     context.commit('setRequests',requests)
   } 
}