<template>
        <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstName">FirstName</label>
            <input type="text" id="firstName" v-model.trim="firstName.val" @blur="clearValidity('firstName')" >
            <p v-if="!firstName.isValid">Firstname must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}" >
            <label for="lastName">LastName</label>
            <input type="text" id="lastName" v-model.trim="lastName.val" @blur="clearValidity('lastName')">
            <p v-if="!lastName.isValid">Lastname must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}" >
            <label for="description">Description</label>
            <textarea id="description" rows="5" v-model.trim="description.val" @blur="clearValidity('description')"></textarea>
            <p v-if="!description.isValid">Description must not be empty!</p>
        </div>
        <div class="form-control" :class="{invalid: !hourlyRate.isValid}" >
            <label for="hourlyRate">Hourly Rate</label>
            <input type="number" id="hourlyRate" v-model.number="hourlyRate.val" @blur="clearValidity('hourlyRate')">
            <p v-if="!hourlyRate.isValid"></p>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}">
            <h3>Areas of Expertise</h3>
            <div>
              <input type="checkbox" id="mentally" value="mentally" v-model="areas.val" @blur="clearValidity('areas')">
              <label for="mentally">Mentally</label>
            </div>
            <div>
                <input type="checkbox" id="physically" value="physically" v-model="areas.val" @blur="clearValidity('areas')" >
                <label for="physically">Physically</label>
            </div>
            <div>
                <input type="checkbox" id="healthy" value="healthy" v-model="areas.val" @blur="clearValidity('areas')">
                <label for="healthy">Healthy</label>
            </div>
            <p v-if="!areas.isValid">Please select one of the areas!</p>    
        </div>
        <p v-if="!formIsValid">Please fill the missing inputs</p>
        <base-button>Register</base-button>
    </form>
</template>


<script>
export default {
    emits: ['save-data'],
    data(){
        return {
            firstName: {
                val: '',
                isValid: true
            },
            lastName: {
                val: '',
                isValid: true
            },
            description: {
                val: '',
                isValid: true
            },
            hourlyRate: {
                val: null,
                isValid: true
            },
            areas: {
                val: [],
                isValid: true
            },
            formIsValid: true

        }
    },
    methods: {
        clearValidity(input){
         this[input].isValid = true
        },
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
            if(this.description.val === ''){
                this.description.isValid = false
                this.formIsValid = false
            }
            if(!this.hourlyRate.val || this.hourlyRate.val < 0){
                this.hourlyRate.isValid = false
                this.formIsValid = false
            }
            if(this.areas.val.length === 0){
                this.areas.isValid = false
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
            desc: this.description.val,
            rate: this.hourlyRate.val,
            areas: this.areas.val
           }

           this.$emit('save-data', formData)
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