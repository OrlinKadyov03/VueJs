export default {
   registerTrainer(context,data){
    const trainerData = {
        id: context.rootGetters.userId,
        firstName: data.first,
        lastName: data.last,
        areas: data.areas,
        description: data.desc,
        hourlyRate: data.rate,
    }
    context.commit('registerTrainer', trainerData)

  }
}