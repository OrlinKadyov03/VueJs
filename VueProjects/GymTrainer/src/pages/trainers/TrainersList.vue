<template>
    <base-card>
    <section>Filter</section>
    <section>
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button link to="/register">Register as Trainer</base-button>
        </div>
        <ul v-if="hasTrainers"> 
            <trainers-item v-for="trainer in filteredTrainers" :key="trainer.id" :id="trainer.id"
            :first-name="trainer.firstName"
            :last-name="trainer.lastName"
            :rate="trainer.hourlyRate"
            :areas="trainer.areas"></trainers-item>
        </ul>
        <p v-else>No Coaches</p>
    </section>
</base-card>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import TrainersItem from '../../components/trainers/TrainersItem.vue'
export default {
    components: {
        TrainersItem,
        BaseButton
    },
    computed: {
        filteredTrainers(){
            return this.$store.getters['trainers/trainers']
        },
        hasTrainers(){
            return this.$store.getters['trainers/hasTrainers']
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