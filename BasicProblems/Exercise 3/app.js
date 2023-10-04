new Vue({
        el: '#exercise',
        data: {
            value: 0,

        },
        computed: {
            checkValidity(){
                if(this.value !== 37){
                    return 'Not there yet'
                }else {
                    return 'Done'
                }
            }
        },
        watch: {
            checkValidity(){
                setTimeout(() => {
                    this.value = 0
                }, 5000);
            }

        }
    });