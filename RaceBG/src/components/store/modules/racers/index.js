import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default {
    namespaced: true,
    state(){
      return {
        racers: [
            {
                id: 'r1',
                firstName: 'Orlin',
                lastName: 'Kadyov',
                tracks: ['Kaloyanovo','SaparavenaBanya','Nurburgring'],
                description: 'BMW E46 328i Manual',
                bet: 100
            },
            {
                id: 'r2',
                firstName: 'Veselin',
                lastName: 'Kadyov',
                tracks: ['Kaloyanovo','SaparavenaBanya','Nurburgring'],
                description: 'BMW E34 525TDS Manual',
                bet: 55
            }

        ]
      }
    },
    mutations,
    actions,
    getters
}