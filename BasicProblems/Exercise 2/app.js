new Vue({
    el: '#exercise',
    data: {
        value: '',
    },
    methods: {
        alertReturn() {
            alert('Done!');
        },
        listen(event){
            if(event.keyCode === 40)
            {
              this.value = event.target.value
            }
        },
        listenToEnter(event){
            if(event.keyCode === 13){
              this.value = event.target.value
            }
        }
    }
});