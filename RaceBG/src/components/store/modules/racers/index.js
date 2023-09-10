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
                tracks: ['k1','s1','n1'],
                cmodel: 'BMW E46 328i Manual',
                cdescription: 'The car is faster that a stock 328i. It has to proove a lot of the racers wrong about the brand.',
                bet: 100
            },
            {
                id: 'r2',
                firstName: 'Veselin',
                lastName: 'Kadyov',
                tracks: ['k1','s1'],
                cmodel: 'BMW E34 525TDS Manual',
                cdescription: 'The car beats an e60 535d with 350hp.',
                bet: 55
            },

        ]
      }
    },
    mutations,
    actions,
    getters
}