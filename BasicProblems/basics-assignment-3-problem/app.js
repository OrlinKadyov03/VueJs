const app = Vue.createApp({
    data(){
        return{
            count: 0
        }
    },
    methods: {
        Add(num){
            return this.count += num
        }
    },
    computed:{
        ShowResult(){
            if(this.count < 37){
                return 'Not there yet'
            }else if(this.count === 37){
                return this.count = 37
            }else{
                return 'Too much'
            }
        }
    },
    watch: {
        ShowResult(){
          const that = this
         setTimeout(function() {
            that.count = 0
         },5000)
        }
    }
})

app.mount('#assignment')