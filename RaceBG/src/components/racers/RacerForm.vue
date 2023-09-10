<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstname">Firstname:</label>
            <input type="text" id="firstname" v-model.trim="firstName.val" @blur="clearValidity('firstName')">
            <p v-if="!firstName.isValid">Firstname must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastname">Lastname:</label>
            <input type="text" id="lastname" v-model.trim="lastName.val" @blur="clearValidity('lastName')">
            <p v-if="!lastName.isValid">Lastname must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !cModel.isValid}">
            <label for="modelofcar">Model of car:</label>
            <input type="text" id="modelofcar" v-model.trim="cModel.val" @blur="clearValidity('cModel')">
            <p v-if="!cModel.isValid">Car model must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !cDescription.isValid}">
            <label for="descripitonofcar">Description of car:</label>
            <textarea id="descriptionofcar" rows="5" v-model.trim="cDescription.val" @blur="clearValidity('cDescription')"></textarea>
            <p v-if="!cDescription.isValid">The description must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !bet.isValid}">
            <label for="bet">Bet:</label>
            <input type="number" id="bet" v-model.number="bet.val" @blur="clearValidity('bet')">
            <p v-if="!bet.isValid">The bet must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !tracks.isValid}">
            <h3>Tracks you have driven on:</h3>
            <div>
                <input type="checkbox" id="k1" value="k1" v-model="tracks.val" @blur="clearValidity('tracks')">
                <label for="k1">Kaloyanovo Track</label>
            </div>
            <div>
                <input type="checkbox" id="s1" value="s1" v-model="tracks.val" @blur="clearValidity('tracks')">
                <label for="s1">SaparevaBanya Track</label>
            </div>
            <div>
                <input type="checkbox" id="n1" value="n1" v-model="tracks.val" @blur="clearValidity('tracks')">
                <label for="n1">Nurburgring Track</label>
            </div>
            <p v-if="!tracks.isValid">You must have driven on one track!</p>
        </div>
        <p v-if="!formIsValid">Please fill the missing inputs!</p>
        <base-button>Register</base-button>
    </form>
</template>


<script>
export default {
    emits: ['save-data'],
    data() {
        return {
            firstName: {
              val: '',
              isValid: true
            },
            lastName: {
              val: '',
              isValid: true
            },
            cModel: {
              val: '',
              isValid: true
            },
            cDescription:{
              val: '',
              isValid: true
            },
            bet:{
              val: null,
              isValid: true
            },
            tracks: {
              val: [],
              isValid: true
            },
            formIsValid: true
        }
    },
    methods: {
        validateForm(){
           this.formIsValid = true
           if(this.firstName.val === ''){
            this.firstName.isValid = false
            this.formIsValid = false
           }
           if(this.lastName.val === ''){
            this.lastName.isValid = false
            this.formIsValid = false
           }
           if(this.cModel.val === ''){
            this.cModel.isValid = false
            this.formIsValid = false
           }
           if(this.cDescription.val === ''){
            this.cDescription.isValid = false
            this.formIsValid = false
           }
           if(!this.bet.val || this.bet.val < 0){
            this.bet.isValid = false
            this.formIsValid = false
           }
           if(this.tracks.val.length === 0){
            this.tracks.isValid = false
            this.formIsValid = false
           }
        },
        submitForm(){
            this.validateForm()

            if(!this.formIsValid){
              return
            }

            const formData = {
                first: this.firstName.val,
                last: this.lastName.val,
                carM: this.cModel.val,
                carD: this.cDescription.val,
                bet: this.bet.val,
                tracks: this.tracks.val
            }

            this.$emit('save-data',formData)
        },
        clearValidity(input){
          this[input].isValid = true
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>