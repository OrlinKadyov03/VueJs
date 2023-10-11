<template>
    <section>Filter</section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Trainer</router-link>
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
</template>

<script>
import TrainersItem from '../../components/trainers/TrainersItem.vue'
export default {
    components: {
        TrainersItem
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