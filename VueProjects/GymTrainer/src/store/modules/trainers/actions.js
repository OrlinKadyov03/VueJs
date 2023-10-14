export default {
   registerTrainer(context,data){
    const formData = {
        id: 't3',
        firstName: data.first,
        lastName: data.last,
        areas: data.areas,
        description: data.desc,
        hourlyRate: data.rate,
    }
    context.commit('registerTrainer', formData)

  }
}