export default {
    registerTrainer(state,payload){
       state.trainers.push(payload)
    },
    setTrainers(state,payload){
        state.trainers = payload
    },
    setFetchTimeStamp(state){
        state.lastFetch = new Date().getTime()
    }
    
}