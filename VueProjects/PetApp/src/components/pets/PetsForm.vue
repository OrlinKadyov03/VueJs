<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="name">Name</label>
            <input type="text" id="name" v-model.trim="name">
        </div>
        <div class="form-control">
            <label for="age">Age</label>
            <input type="number" id="age" v-model.number="age">
        </div>
        <div class="form-control">
            <h3>Type of Animal: </h3>
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
            <h3>Breed: </h3>
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
           <label for="description">Description</label>
             <textarea name="description" id="description" rows="5" v-model.trim="description"></textarea>
        </div>
        <base-button>Register</base-button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      age: '',
      type: [],
      breed: [],
      image: null,
      description: ''
    }
  },
  methods: {
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

      console.log('Formdata',formData)
    }
  }
}
</script>