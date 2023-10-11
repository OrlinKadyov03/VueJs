<template>
    <section>Filter</section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as Trainer</router-link>
        </div>
        <ul v-if="hasTrainers">
            <li v-for="trainer in filteredTrainers" 
            :key="trainer.id"
            :first-name="trainer.firstName"
            :last-name="trainer.lastName"
            :areas="trainer.areas"
            :description="trainer.description"
            :hourlyRate="trainer.hourlyRate"
            >
             {{ trainer.firstName }}
            </li>
        </ul>
        <p v-else>No Coaches</p>
    </section>
</template>

<script>
export default {
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