let timer

export default {
    async signup(context,payload){
       return context.dispatch('auth',{
         ...payload,
         mode: 'signup'
        })
     },
    async login(context,payload){
       return context.dispatch('auth',{
        ...payload,
        mode: 'login'
       })
    },
   async auth(context,payload){
       const mode = payload.mode
       let urlLogin = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC81cr7aqym5mMeew-VsR4AWve3MvnGgHw'
  
       if(this.mode === 'signup'){
        urlLogin = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC81cr7aqym5mMeew-VsR4AWve3MvnGgHw'
       }

       const response = await fetch(urlLogin,{
        method: 'POST',
        body: JSON.stringify({
           email: payload.email,
           password: payload.password,
           returnSecureToken: true
        })
       })

       const responseData = await response.json()

       if(!response.ok){
           const error = new Error(responseData.message || 'Failed to fetch')
           throw error
       }
      const expiresIn = +responseData.expiresIn * 1000
       const expirationDate = new Date().getTime() + expiresIn

       localStorage.setItem('token',responseData.idToken)
       localStorage.setItem('userId',responseData.localId)
       localStorage.setItem('tokenExpiration',expirationDate)

     timer = setTimeout(function(){
         context.dispatch('autoLogout')
       },expiresIn)

       context.commit('setUser',{
           token: responseData.idToken,
           userId: responseData.localId
         })
    },

    logout(context){
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        localStorage.removeItem('tokenExpiration')

        clearInterval(timer)

        context.commit('setUser',{
            token: null,
            userId: null 
        })
    },
    tryLogin(context){
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')
        const tokenExpiration = localStorage.getItem('tokenExpiration')

        const expiresIn = +tokenExpiration - new Date().getTime()

        if(expiresIn < 0){
            return
        }

        timer = setTimeout(function(){
            context.dispatch('autoLogout')
        },expiresIn)

        if(token && userId){
            context.commit('setUser',{
                token: token,
                userId: userId
            })
        }
    },
    autoLogout(context){
        context.dispatch('logout')
        context.commit('setAutoLogouttt')
    }
}