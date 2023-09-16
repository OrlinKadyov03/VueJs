<template>
    <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
      <p>{{ error }}</p>
    </base-dialog>
    <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline" @click="loadRacers(true)">Refresh</base-button>
            <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to Register as Racer</base-button>
            <base-button v-if="isLoggedIn && !isRacer && !isLoading" link to="/register">Register as racer</base-button>
        </div>
        <div v-if="isLoading">
        <base-spinner></base-spinner>
        </div>
        <ul v-else-if="hasRacers">
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
</div>
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
            isLoading: false,
            error: null,
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
            return !this.isLoading && this.$store.getters['racers/hasRacers']
        },
        isRacer(){
            return this.$store.getters['racers/isRacer']
        },
        isLoggedIn(){
            return this.$store.getters.isAuthenticated
        }
    },
    created(){
        this.loadRacers()     
    },
    methods: {
        setFilters(updatedFilters) {
           this.activeFilters = updatedFilters
        },
        async loadRacers(refresh = false){
            this.isLoading = true
            try {
                await this.$store.dispatch('racers/loadRacers', {forceRefresh: refresh})
            } catch (error) {
                this.error = error.message || 'Something went wrong!'
            }
            this.isLoading = false
        },
        handleError(){        
            this.error = null
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