const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      LastName: '',
    /* FullName: '' */
    };
  },
  watch:{
    counter(value){
      if(this.counter > 50){
        const that = this
        setTimeout(function(){
         that.counter = 0
        },2000)
      }
    }
  /* name(value){
    if(this.value === '') {
       this.name = ''
    }else{
       this.FullName = value + ' ' + this.LastName
    }
   },
   LastName(value){
    if(this.value === ''){
      this.LastName = ''
    }else{
      this.FullName = this.name + ' ' + value
    }
   }*/
  },
  computed: {
    fullName(){
      console.log('App Running')
      if(this.name === '' || this.LastName === ''){
        return ''
      }else{
        return this.name + ' ' + this.LastName
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name = ''
    }
   }
});

app.mount('#events');
