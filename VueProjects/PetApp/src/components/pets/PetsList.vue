<template>
    <div>
        <h2>Pets List</h2>
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
export default {
    components: {
        PetsItem
    },
    computed: {
        filteredPets(){
           return this.$store.getters['pets/pets']
        },
        hasPets(){
           return this.$store.getters['pets/hasPets']
        }
    }
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