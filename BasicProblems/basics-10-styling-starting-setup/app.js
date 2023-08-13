const app = Vue.createApp({
    data(){
        return{
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        }
    },
    methods:{
        boxSelected(box){
            if(box === 'A'){
                this.boxASelected = !this.boxASelected
            }else if(box === 'B'){
                this.boxBSelected = !this.boxBSelected
            }else if(box === 'C'){
                this.boxCSelected = !this.boxCSelected
            }
        }
    },
    computed:{
        BoxA(){
            return {active: this.boxASelected}
        },
        BoxB(){
            return {active: this.boxBSelected}
        },
        BoxC(){
            return {active: this.boxCSelected}
        },
    }
})

app.mount('#styling')