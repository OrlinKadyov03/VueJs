const app = Vue.createApp({
    data(){
        return{
          userOutput: '',
          userOutputEnter: ''
        }
    },
    methods: {
        ShowAlert(){
           alert('The button was clicked!')
        },
        OutPutKeyDown(){
           this.userOutput = event.target.value
        },
        OutPutEnter(){
          this.userOutputEnter = this.userOutput
        }
    }
})

app.mount('#assignment')