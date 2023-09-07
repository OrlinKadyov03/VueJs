<template>
    <section>
        Filter
    </section>
    <section>
        <div class="controls">
            <button>Refresh</button>
            <router-link to="/register">Register as racer</router-link>
        </div>
        <ul v-if="hasRacers">
           <racer-item v-for="racer in filteredRacers" :key="racer.id" 
           :id="racer.id"
           :first-name="racer.firstName" 
           :last-name="racer.lastName" 
           :description="racer.description"
           :bet="racer.bet"
           :tracks="racer.tracks" 
           ></racer-item>
        </ul>
        <h3 v-else>No racers found!</h3>
    </section>
</template>

<script>
import RacerItem from '../../racers/RacerItem.vue'
export default {
    components: {
        RacerItem
    },
    computed: {
        filteredRacers(){
            return this.$store.getters['racers/racers']
        },
        hasRacers(){
            return this.$store.getters['racers/hasRacers']
        }
    }
}
</script>