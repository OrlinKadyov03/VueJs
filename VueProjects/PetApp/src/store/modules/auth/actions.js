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

       localStorage.setItem('token',responseData.idToken)
       localStorage.setItem('userId',responseData.localId)

       context.commit('setUser',{
           token: responseData.idToken,
           userId: responseData.localId,
           tokenExpiration: responseData.expiresIn
         })
    },

    logout(context){
        context.commit('setUser',{
            token: null,
            userId: null,
            tokenExpiration: null
        })
    },
    tryLogin(context){
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')

        if(token && userId){
            context.commit('setUser',{
                token: token,
                userId: userId,
                tokenExpiration: null
            })
        }
    }
}