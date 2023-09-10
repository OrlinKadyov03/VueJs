export default {
    registerRacer(context,data) {
        const racerData = {
            id: context.rootGetters.racerId,
            firstName: data.first,
            lastName: data.last,
            carM: data.cModel,
            carD: data.cDescription,
            bet: data.bet,
            tracks: data.tracks

        }

        context.commit('registerRacer',racerData)
    }
}