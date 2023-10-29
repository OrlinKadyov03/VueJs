<template>
    <base-card>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !name.isValid}">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model.trim="name.val" @blur="clearValidity('name')">
            <p v-if="!name.isValid">Please enter pet name</p>
        </div>
        <div class="form-control" :class="{invalid: !age.isValid}">
            <label for="age">Age:</label>
            <input type="number" id="age" v-model.number="age.val" @blur="clearValidity('age')">
            <p v-if="!age.isValid">Please enter pet age</p>
        </div>
        <div class="form-control" :class="{invalid: !type.isValid}">
            <h3>Type of Animal:</h3>
            <div>
              <input type="checkbox" id="dog" value="dog" v-model="type.val" @blur="clearValidity('type')">
              <label for="dog">Dog</label>
            </div>
            <div>
                <input type="checkbox" id="cat" value="cat" v-model="type.val" @blur="clearValidity('type')" >
                <label for="cat">Cat</label>
            </div>
            <p v-if="!type.isValid">Please choose what pet you have</p>
        </div>
        <div class="form-control" :class="{invalid: !breed.isValid}" >
            <h3>Breed:</h3>
            <div>
              <input type="checkbox" id="germanshepherd" value="germanshepherd" v-model="breed.val" @blur="clearValidity('breed')">
              <label for="germanshepherd">German Shepherd</label>
            </div>
            <div>
                <input type="checkbox" id="stray" value="stray" v-model="breed.val" @blur="clearValidity('breed')" >
                <label for="stray">Stray</label>
            </div>
            <p v-if="!breed.isValid">Please choose your pet breed</p>
        </div>
        <div class="form-group" :class="{invalid: !image.isValid}">
            <label for="petImage">Pet Image:</label>
            <input type="file" id="petImage" name="petImage" accept="image/*" @change="handleImageUpload"  @blur="clearValidity('image')">
            <p v-if="!image.isValid">Please insert an image</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
           <label for="description">Description:</label>
             <textarea name="description" id="description" rows="5" v-model.trim="description.val"  @blur="clearValidity('description')"></textarea>
             <p v-if="!description.isValid">Please fill the description</p>
        </div>
        <base-button>Register</base-button>
    </form>
</base-card>
</template>

<script>
export default {
  data() {
    return {
      name: {
       val: '',
       isValid: true
      },
      age:{
        val: null,
        isValid: true
      },
      type: {
        val: [],
        isValid: true
      },
      breed: {
        val: [],
        isValid: true
      },
      image: {
        val: null,
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      formIsValid: false
    }
  },
  methods: {
    clearValidity(input){
      this[input].isValid = true
    },
    validateForm(){
      this.formIsValid = true
      if(this.name.val === ''){
        this.name.isValid = false
        this.formIsValid = false
      }
      if(!this.age.val || this.age.val < 0 ){
        this.age.isValid = false
        this.formIsValid = false
      }
      if(this.type.val.length === 0){
        this.type.isValid = false
        this.formIsValid = false
      }
      if(this.breed.val.length === 0){
        this.breed.isValid = false
        this.formIsValid = false
      }
      if(this.image.val === null){
        this.image.isValid = false
        this.formIsValid = false
      }
      if(this.description.val === ''){
        this.description.isValid = false
        this.formIsValid = false
      }
    },
    openImageUpload() {
      // Trigger the file input element
      document.getElementById('petImage').click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0]; // Get the selected file
      this.image = file; // Store the file in the 'image' data property
    },
    submitForm(){

      this.validateForm()

      if(!this.formIsValid){
        return
      }

      const formData = {
        name: this.name.val,
        years: this.age.val,
        type: this.type.val,
        breed: this.breed.val,
        image: this.image.val,
        description: this.description.val
      }
       this.$emit('save-data',formData)
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