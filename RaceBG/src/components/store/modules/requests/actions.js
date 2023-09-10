export default {
    contactRacer(context,payload){
       const newRequest = {
         iD: new Date().toISOString,
         racerId: payload.racerId,
         racerEmail: payload.email,
         message: payload.message
       }
       context.commit('addRequest',newRequest)
    }
}