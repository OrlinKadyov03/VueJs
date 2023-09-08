<template>
    <section>
        Filter
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button link to="/register">Register as racer</base-button>
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
      </base-card>
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