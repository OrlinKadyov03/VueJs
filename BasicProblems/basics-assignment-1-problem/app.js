const app = Vue.createApp({
    data(){
        return {
        name: "Orlin",
        age: 20,
        img: 'https://img.freepik.com/free-psd/google-icon-isolated-3d-render-illustration_47987-9777.jpg?w=2000'

    }
    },
    methods:{
        AgeInFiveYears(){
         return this.age + 5
        },
        RandomNumber(){
           const number = Math.random()
           return number
        }
    }
})

app.mount('#assignment')