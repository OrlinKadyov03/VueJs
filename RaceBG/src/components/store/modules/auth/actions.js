export default {
    async login(context,payload) {
      return context.dispatch('auth',{
        ...payload,
        mode: 'login'
       })
    },
    async signup(context,payload) {
       return context.dispatch('auth',{
        ...payload,
        mode: 'signup'
     })
    },
    async auth(context,payload){
        const mode = payload.mode
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCm8U4msa6RFi_BMH4uQP3b67Ra7od66YU'
        if(mode === 'signup'){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCm8U4msa6RFi_BMH4uQP3b67Ra7od66YU'
        }
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        })
        const responseData = await response.json()

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login data!')
            throw error
        }


        localStorage.setItem('token',responseData.idToken)
        localStorage.setItem('racerId',responseData.racerId)

        context.commit('setRacer', {
            token: responseData.idToken,
            racerId: responseData.localId,
            tokenExpiration: responseData.expiresIn
        })
    },
    tryLogin(context){
      const token = localStorage.getItem('token')
      const racerId = localStorage.getItem('racerId')
      if(token && racerId){
        context.commit('setRacer',{
            token: token,
            racerId: racerId,
            tokenExpiration: null
        })
      }
    },
    logout(context){
       context.commit('setRacer',{
         token: null,
         racerId: null,
         tokenExpiration: null
       })
    }
}