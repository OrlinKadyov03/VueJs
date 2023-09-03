export default {
    async registerCoach(context,data){
        const userId = context.rootGetters.userId
        const coachData = {
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        }

        const token = context.rootGetters.token

        const response = await fetch(`https://vue-coach-store-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json?auth=` + token,{
            method: 'PUT',
            body: JSON.stringify(coachData)
        })
      
      const resData = await response.json()
      

        if(!response.ok) {
            const error = new Error(resData.message || 'Failed to fetch!')
            throw error
        }

        context.commit('registerCoach',{
            ...coachData,
            id: userId
        })
    },
    async loadCoaches(context,payload){
       if(!payload.forceRefresh && !context.getters.shouldUpdate){
        return
       }

       const response = await fetch(`https://vue-coach-store-default-rtdb.europe-west1.firebasedatabase.app/coaches.json`
       )
       const resData = await response.json()

       if(!response.ok){
        //Error
       }

     const coaches = []

     for(const key in resData){
        const coach = {
            id:key,
            firstName: resData[key].firstName,
            lastName: resData[key].lastName,
            description: resData[key].description,
            hourlyRate: resData[key].hourlyRate,
            areas: resData[key].areas

        }
        coaches.push(coach)
     }

     context.commit('setCoaches',coaches)
     context.commit('setFetchTimestamp')
    }
}