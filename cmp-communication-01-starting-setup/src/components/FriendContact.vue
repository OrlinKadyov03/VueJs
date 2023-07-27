<template>
  <li>
    <h2>{{name}} {{ isFavorite ? '(Favorite)' : '' }}</h2>
    <button @click="toggleFav">Toggle</button>
    <button @click="toggleDetails">{{HideShow}} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
 // props:[ 'name', 'phoneNumber', 'emailAddress',  'isFavorite' ],
  props: { 
   id : {
      type: String,
      required: true
    },
   name: {
     type: String,
     required: true
   },
   phoneNumber: {
    type: String,
    required: true
   },
   emailAddress: {
    type: String,
    required: true
   },
   isFavorite: {
    type: Boolean,
    required: false,
    default: false,
   }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFav(){
      this.$emit('toggle-funct',this.id)
    }
  },
  computed: {
    HideShow(){
     return this.detailsAreVisible ? 'Hide' : 'Show' 
    }
  }
};
</script>