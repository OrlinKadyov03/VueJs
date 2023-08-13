const app = Vue.createApp({
    data(){
        return{
            userInput: '',
            IsVisible: true,
            BackGroundInput: ''
        }
    },
    methods:{
        Toggle(){
            return this.IsVisible = !this.IsVisible
        },
    },
    computed:{
        ParaClass(){
            return{
            user1: this.userInput === 'user1',
            user2: this.userInput === 'user2',
            visible: this.IsVisible === true,
            hidden: this.IsVisible === false
            }
        }
    }
})

app.mount('#assignment')