export default {
      async login(context,payload) {
        const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCm8U4msa6RFi_BMH4uQP3b67Ra7od66YU',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
        const responseData = await response.json()

        if(!response.ok){
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data!')
            throw error
        }
    

        console.log(responseData)
        context.commit('setRacer', {
            token: responseData.idToken,
            racerId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    async signup(context,payload) {
       const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCm8U4msa6RFi_BMH4uQP3b67Ra7od66YU',{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })

        const responseData = await response.json()

        if(!response.ok){
            console.log(responseData)
            const error = new Error(responseData.message || 'Failed to authenticate. The email already exists!')
            throw error
        }
    

        console.log(responseData)
        context.commit('setRacer', {
            token: responseData.idToken,
            racerId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    logout(context){
       context.commit('setRacer',{
         token: null,
         racerId: null,
         tokenExpiration: null
       })
    }
}