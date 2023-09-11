<template>
    <form @submit.prevent="submitForm">
       <div class="form-control">
         <label for="Email">Your E-mail</label>
         <input type="email" id="email" v-model="email">
       </div>
       <div class="form-control">
         <label for="car">Your Car</label>
         <input type="text" id="car" v-model="racerCar">
       </div>
       <div class="form-control">
         <label for="model">Your Model</label>
         <input type="text" id="model" v-model="racerCModel">
       </div>
       <div class="form-control">
         <label for="horsepower">HorsePower</label>
         <input type="number" id="horsepower" v-model.number="racerHorsePower">
       </div>
       <div class="form-control">
         <label for="message">Message</label>
         <textarea rows="5" id="message" v-model="message"></textarea>
       </div>
       <p class="errors" v-if="!formIsValid">Please fill the message form correctly!</p>
       <div class="actions">
          <base-button>Send Message</base-button>
       </div>
    </form>
</template>

<script>
export default {
    data(){
        return {
            email: '',
            message: '',
            racerCar: '',
            racerCModel: '',
            racerHorsePower:'',
            formIsValid: true
        }
    },
    methods: {
        submitForm(){
           this.formIsValid = true
           if(this.email === '' || !this.email.includes('@') || this.message === ''){
            this.formIsValid = false
            return
           } 
           if(this.racerCar === ''){
            this.formIsValid = false
            return
           } 
           if(this.racerCModel === ''){
            this.formIsValid = false
            return
           }
           if(!this.racerHorsePower || this.racerHorsePower < 0){
            this.formIsValid = false
            return
           }
            this.$store.dispatch('requests/contactRacer', {
                email: this.email,
                racerCar: this.racerCar,
                racerCModel: this.racerCModel,
                racerHorsePower: this.racerHorsePower,
                message: this.message,
                racerId: this.$route.params.id
            })
            this.$router.replace('/racers')
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>