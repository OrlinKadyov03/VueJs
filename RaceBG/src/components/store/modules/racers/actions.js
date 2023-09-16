export default {
    async registerRacer(context,data) {
        const racerId = context.rootGetters.racerId
        const racerData = {
            firstName: data.first,
            lastName: data.last,
            tracks: data.tracks,
            cmodel: data.cmodel,
            cdescription: data.cdescription,
            bet: data.bet,
           
        }

       const token = context.rootGetters.token

       const response = await fetch(`https://racebg-f050b-default-rtdb.europe-west1.firebasedatabase.app/racers/${racerId}.json?auth=` + token,{
            method: 'PUT',
            body: JSON.stringify(racerData)
        }) 
              
        // const responseData = await response.json()

        if(!response.ok) {
            // error
        }

        context.commit('registerRacer', {
            ...racerData,
            id: racerId
        })
    },
   async loadRacers(context,payload){

    if(!payload.forceRefresh && !context.getters.shouldUpdate){
        return
    }

    const response = await fetch(`https://racebg-f050b-default-rtdb.europe-west1.firebasedatabase.app/racers.json`)

    const responseData = await response.json()

    if(!response.ok) {
        const error = new Error(responseData.message || 'Failed to fetch!')
        throw error
    }

    const racers = []

    for(const key in responseData){
       const racer = {
        id:key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        tracks: responseData[key].tracks,
        cmodel: responseData[key].cmodel,
        cdescription: responseData[key].cdescription,
        bet: responseData[key].bet
       
    }
    racers.push(racer)
  }

  context.commit('setRacers',racers)
  context.commit('setFetchTimestamp')
}}
