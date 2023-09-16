let timer

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
  

        const expiresIn = +responseData.expiresIn * 1000
        const expirationDate = new Date().getTime() + expiresIn

        localStorage.setItem('token',responseData.idToken)
        localStorage.setItem('racerId',responseData.racerId)
        localStorage.setItem('tokenExpiration',expirationDate)


      timer = setTimeout(function() {
          context.dispatch('autoLogout')
        },expiresIn)

        context.commit('setRacer', {
            token: responseData.idToken,
            racerId: responseData.localId,
        })
    },
    tryLogin(context){
      const token = localStorage.getItem('token')
      const racerId = localStorage.getItem('racerId')
      const tokenExpiration = localStorage.getItem('tokenExpiration')

  
      const expiresIn = +tokenExpiration - new Date().getTime()

      if(expiresIn < 0){
        return
      }

       timer = setTimeout(function(){
       context.dispatch('autoLogout')
      },expiresIn)

      if(token && racerId){
        context.commit('setRacer',{
            token: token,
            racerId: racerId,
        })
      }
    },
    logout(context){
       localStorage.removeItem('token')
       localStorage.removeItem('racerId')
       localStorage.removeItem('tokenExpiration')

       clearTimeout(timer)
    
       context.commit('setRacer',{
         token: null,
         racerId: null,
       })
    },
    autoLogout(context){
        context.dispatch('logout')
        context.commit('didAutoLogout')
    }
}