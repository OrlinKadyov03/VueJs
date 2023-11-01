<template>
    <div>
      <base-card>
        <pets-filter @change-filter="setFilter"></pets-filter>
        <div class="regi">
          <base-button v-if="!isPets && !isLoading" link to="/Register">Register your pet</base-button>
          <base-button @click="loadPets">Refresh</base-button>   
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasPets">
            <pets-item v-for="pet in filteredPets" :key="pet.id"  :id="pet.id"
            :name="pet.name"
            :years="pet.years"
            :breed="pet.breed"
            :description="pet.description">
            </pets-item>
        </ul>
        <p v-else>No Pets</p>
      </base-card>
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
        },
        isLoading: false
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
           return !this.isLoading && this.$store.getters['pets/hasPets']
        },
        isPets(){
          return this.$store.getters['pets/isPets']
        }
    },
    methods:{
        setFilter(updatedFilters){
          this.activeFilters = updatedFilters
        },
        async loadPets(){
          this.isLoading = true
         await this.$store.dispatch('pets/loadPets')
          this.isLoading = false
        }
    },
    created(){
      this.loadPets()
    }

}
</script>

<style scoped>

.regi {
    text-align: right;
    justify-content: right;
}
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