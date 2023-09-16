export default {
    async contactRacer(context,payload){
       const newRequest = {
         racerCar: payload.racerCar,
         racerCModel: payload.racerCModel,
         racerHorsePower: payload.racerHorsePower,
         racerEmail: payload.email,
         message: payload.message
       }
      const response = await fetch(`https://racebg-f050b-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.racerId}.json`, {
        method: 'POST',
        body: JSON.stringify(newRequest)
       })

       const responseData = await response.json()

       if(!response.ok){
        const error = new Error(responseData.message || 'Failed to send request.')
        throw error
       }

       newRequest.id = responseData.name
       newRequest.racerId = payload.racerId

       context.commit('addRequest',newRequest)
    },
    async fetchRequests(context) {
      const racerId = context.rootGetters.racerId
      const token = context.rootGetters.token
      const response = await fetch(`https://racebg-f050b-default-rtdb.europe-west1.firebasedatabase.app/requests/${racerId}.json?auth=` + token)
      const responseData = await response.json()

      if(!response.ok){
        const error = new Error(responseData.message || 'Failed to fetch requests.')
        throw error
      }

      const requests = []

      for(const key in responseData){
        const request = {
          id: key,
          racerId: racerId,
          racerCar: responseData[key].racerCar,
          racerCModel: responseData[key].racerCModel,
          racerHorsePower: responseData[key].racerHorsePower,
          racerEmail: responseData[key].email,
          message: responseData[key].message
        }
        requests.push(request)
      }
      context.commit('setRequests', requests)
    }
}