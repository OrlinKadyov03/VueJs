<template>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button v-if="!isRacer" link to="/register">Register as racer</base-button>
        </div>
        <ul v-if="hasRacers">
           <racer-item v-for="racer in filteredRacers" :key="racer.id" 
           :id="racer.id"
           :first-name="racer.firstName" 
           :last-name="racer.lastName" 
           :cmodel="racer.cmodel"
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
import CoachFilter from '../../racers/RacerFilter.vue'
export default {
    components: {
        RacerItem,
        CoachFilter
    },
    data() {
        return {
            activeFilters: {
                k1: true,
                s1: true,
                n1: true
            }
        }
    },
    computed: {
        filteredRacers(){
            const racers = this.$store.getters['racers/racers']
            return racers.filter(racer => {
                if(this.activeFilters.k1 && racer.tracks.includes('k1')){
                  return true
                }
                if(this.activeFilters.s1 && racer.tracks.includes('s1')){
                  return true
                }
                if(this.activeFilters.n1 && racer.tracks.includes('n1')){
                  return true
                }
                return false
            })
        },
        hasRacers(){
            return this.$store.getters['racers/hasRacers']
        },
        isRacer(){
            return this.$store.getters['racers/isRacer']
        }
    },
    methods: {
        setFilters(updatedFilters) {
           this.activeFilters = updatedFilters
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