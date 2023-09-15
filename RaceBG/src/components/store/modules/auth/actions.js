export default {
    login() {},
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
            const error = new Error(responseData.message || 'Failed to fetch requests.')
            throw error
        }
    

        console.log(responseData)
        context.commit('setRacer', {
            token: responseData.idToken,
            racerId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    }
}