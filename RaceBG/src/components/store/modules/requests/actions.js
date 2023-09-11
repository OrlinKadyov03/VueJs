export default {
    contactRacer(context,payload){
       const newRequest = {
         iD: new Date().toISOString,
         racerId: payload.racerId,
         racerCar: payload.racerCar,
         racerCModel: payload.racerCModel,
         racerHorsePower: payload.racerHorsePower,
         racerEmail: payload.email,
         message: payload.message
       }
       context.commit('addRequest',newRequest)
    }
}