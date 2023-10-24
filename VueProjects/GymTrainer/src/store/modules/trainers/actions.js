export default {
  async registerTrainer(context,data){
    const userId = context.rootGetters.userId
    const trainerData = {
        firstName: data.first,
        lastName: data.last,
        areas: data.areas,
        description: data.desc,
        hourlyRate: data.rate,
    }

   const response = await fetch(`https://gymcoach-a8d73-default-rtdb.europe-west1.firebasedatabase.app/trainers/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(trainerData)
    })

   // const responseData = await response.json()

    if(!response.ok) {
      // error
    }

    context.commit('registerTrainer', {
      ...trainerData,
      id: userId
    })
  },
  async loadTrainers(context,payload){
    if(!payload.forceRefresh && !context.getters.shouldUpdate){
      return
    }
    const response = await fetch(`https://gymcoach-a8d73-default-rtdb.europe-west1.firebasedatabase.app/trainers.json`)
    const responseData = await response.json()

    if(!response.ok){
      const error = new Error(responseData.message || 'Failed to fetch!')
      throw error
    }

    const trainers = []

    for(const key in responseData) {
      const trainer = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        areas: responseData[key].areas,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
      }
      trainers.push(trainer)
    }

    context.commit('setTrainers',trainers)
    context.commit('setFetchTimeStamp')
  }
  
}