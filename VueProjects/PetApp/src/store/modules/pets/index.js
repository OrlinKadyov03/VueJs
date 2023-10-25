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
                image: '/a.webp' ,
                description: 'Perfect dog for breeding!',

            },
            {
                id: 'p2',
                name: 'Roni',
                years: 5,
                breed: ['Shepherd'],
                image: '',
                description: 'He is beats every dog!',

            }
        ]
    }
  },
  mutations,
  actions,
  getters
}