<template>
    <base-card>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model.trim="name">
        </div>
        <div class="form-control">
            <label for="age">Age:</label>
            <input type="number" id="age" v-model.number="age">
        </div>
        <div class="form-control">
            <h3>Type of Animal:</h3>
            <div>
              <input type="checkbox" id="dog" value="dog" v-model="type">
              <label for="dog">Dog</label>
            </div>
            <div>
                <input type="checkbox" id="cat" value="cat" v-model="type" >
                <label for="cat">Cat</label>
            </div>
        </div>
        <div class="form-control">
            <h3>Breed:</h3>
            <div>
              <input type="checkbox" id="germanshepherd" value="germanshepherd" v-model="breed">
              <label for="germanshepherd">German Shepherd</label>
            </div>
            <div>
                <input type="checkbox" id="stray" value="stray" v-model="breed" >
                <label for="stray">Stray</label>
            </div>
        </div>
        <div class="form-group">
            <label for="petImage">Pet Image:</label>
            <input type="file" id="petImage" name="petImage" accept="image/*" @change="handleImageUpload">
        </div>
        <div class="form-control">
           <label for="description">Description:</label>
             <textarea name="description" id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <base-button>Register</base-button>
    </form>
</base-card>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age:'',
      type: [],
      breed: [],
      image: null,
      description:'',
      formIsValid: false
    }
  },
  methods: {
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

      const formData = {
        name: this.name,
        age: this.age,
        type: this.type,
        breed: this.breed,
        image: this.image,
        description: this.description
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