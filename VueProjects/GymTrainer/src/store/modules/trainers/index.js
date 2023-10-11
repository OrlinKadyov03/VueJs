import mutations from './mutations.js'
import getters from './getters.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state() {
        return {
            trainers: [
                {
                    id: 't1',
                    firstName: 'Iliq',
                    lastName: 'Malinov',
                    areas: ['mentally','physically','healthy'],
                    description: 'Hello, my name is Iliq,I am a trainer from 10 years',
                    hourlyRate: 30
                },
                {
                    id: 't2',
                    firstName: 'Orlin',
                    lastName: 'Videnov',
                    areas: ['mentally','healthy'],
                    description: 'My name is Orlin I have been training for 4 years and I have developed good skills about the human body.',
                    hourlyRate: 60
                }
            ]
        }
    },
    mutations,
    getters,
    actions
}