<template>
    <div>
     <section>
     <base-card>
       <h3>Pet name: {{ petName }}</h3>
       <h4>Pet age: {{ petAge }}</h4>
     </base-card>
   </section>
   <section>
    <base-card>
     <h3>Interested, message me!</h3>
     <base-button link :to="contactLink">Contact</base-button>
    </base-card>
   </section>
   <section>
    <base-card>
      <h3>Breed</h3>
     <base-badge v-for="bre in selectedPet.breed" :key="bre" :type="bre" :title="bre"></base-badge>
     <p>Description: {{ description }}</p>
    </base-card>
   </section>
</div>
</template>

<script>

export default {
  props:['id'],
  data(){
    return{
      selectedPet: null
    }
  },
  computed: {
    petName(){
        return this.selectedPet.name
    },
    petAge(){
        return this.selectedPet.years
    },
    contactLink(){
        return '/pets' + '/' + this.id + '/contact'
    },
    breed(){
        return this.selectedPet.breed
    },
    description(){
        return this.selectedPet.description
    }
  },
  created(){
    this.selectedPet = this.$store.getters['pets/pets'].find(
        (pet) => pet.id === this.id
    )
  }
}
</script>


<style scoped>

</style>