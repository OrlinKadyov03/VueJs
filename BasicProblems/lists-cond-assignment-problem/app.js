const app = Vue.createApp({
  data(){
    return{
        enteredTask: '',
        tasks: [],
        isClicked: true
    }
  },
  computed:{
    ButtonName(){
    return this.isClicked ? 'Hide list' : 'Show'
    }
  },
  methods:{
    AddTask(){
        this.tasks.push(this.enteredTask)
        this.enteredTask = ''
    },
    ButtonClick(){
        return this.isClicked =!this.isClicked
    }
    }
})

app.mount('#assignment')