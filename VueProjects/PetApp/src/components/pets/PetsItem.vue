<template>
    <base-card>
      <li>
        <div class="actions">
          <h3 class="pet-name">Pet name: {{ name }}</h3>
        </div>
        <router-link :to="detailsLink" class="router-link-container">
          <div class="image-container">
            <img :src="getImagePath()" class="pet-image" alt="Pet Image">
          </div>
        </router-link>
    </li>
    </base-card>
  </template>
  
  <script>
  export default {
    props: ['id', 'name', 'years', 'breed','image', 'description'],
    computed: {
        contactLink(){
            return "/pets" +  "/" + this.id +  "/contact"
        },
        detailsLink(){
            return "/pets" +  "/" + this.id
         },
    },
    methods: {
        getImagePath() {
      const petIdentifier = this.id;
      const imageFileName = `/${petIdentifier}.jpg`;
      return `${imageFileName}`;
    },
    }
  }
  </script>
  
  <style scoped>
  li {
    margin: 1rem 0;
    border: 2px solid black;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center content horizontally */
    text-align: center; /* Center text within the card */
    width: 650px;

  }
  
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none; /* Remove the border */
    overflow: hidden;
    width: 50%;
    max-width: 70%;
  }
  
  .pet-image {
    width: 100%;
    height: auto; /* Maintain the image's aspect ratio */
  }
  
  .pet-name {
    font-size: 1.5rem;
    margin: 0.5rem 0;
    text-align: center; /* Center the text horizontally */
    margin-bottom: 20px;
  }
  
  .actions {
    display: flex;
    justify-content: flex-end;
  }
  
  .router-link-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  </style>
  