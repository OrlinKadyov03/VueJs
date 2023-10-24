import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
  namespaced: true,
  state(){
    return {
        pets: [
            {
                id: 'p1',
                name: 'Max',
                years: 5,
                breed: ['German Shepherd'],
                description: 'Perfect dog for breeding!',

            }
        ]
    }
  },
  mutations,
  actions,
  getters
}