<template>
    <div>
        <pets-filter @change-filter="setFilter"></pets-filter>
        <ul>
            <pets-item v-for="pet in filteredPets" :key="pet.id"  :id="pet.id"
            :name="pet.name"
            :years="pet.years"
            :breed="pet.breed"
            :description="pet.description">
            </pets-item>
        </ul>
    </div>
</template>

<script>
import PetsItem from './PetsItem.vue'
import PetsFilter from './PetsFilter.vue'
export default {
    components: {
        PetsItem,
        PetsFilter
    },
    data(){
      return {
        activeFilters: {
            dog: true,
            cat: true
        }
      }
    },
    computed: {
        filteredPets(){
           const pets = this.$store.getters['pets/pets']
           return pets.filter(pets => {
            if(this.activeFilters.dog && pets.type.includes('dog')){
                return true
            }
            if(this.activeFilters.cat && pets.type.includes('cat')){
                return true
            }
            return false
           })
        },
        hasPets(){
           return this.$store.getters['pets/hasPets']
        }
    },
    methods:{
        setFilter(updatedFilters){
          this.activeFilters = updatedFilters
        },
    },

}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>