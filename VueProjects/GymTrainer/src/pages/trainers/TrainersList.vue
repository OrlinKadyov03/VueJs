<template>
    <section>
         <trainers-filter @change-filter="setFilters">

         </trainers-filter>
    </section>
    <section>
        <base-card>
        <div class="controls">
            <base-button mode="outline">Refresh</base-button>
            <base-button v-if="!isTrainer" link to="/register">Register as Trainer</base-button>
        </div>
        <ul v-if="hasTrainers"> 
            <trainers-item v-for="trainer in filteredTrainers" :key="trainer.id" :id="trainer.id"
            :first-name="trainer.firstName"
            :last-name="trainer.lastName"
            :rate="trainer.hourlyRate"
            :areas="trainer.areas"></trainers-item>
        </ul>
        <p v-else>No Coaches</p>
       </base-card>
    </section>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import TrainersItem from '../../components/trainers/TrainersItem.vue'
import TrainersFilter from '../../components/trainers/TrainersFilter.vue'
export default {
    components: {
        TrainersItem,
        BaseButton,
        TrainersFilter
    },
    data(){
        return {
            activeFilters:{
                mentally: true,
                physically: true,
                healthy: true
            }
        }
    },
    computed: {
        isTrainer(){
           return this.$store.getters['trainers/isTrainer']
        },
        filteredTrainers(){
            const trainers =  this.$store.getters['trainers/trainers']
            return trainers.filter(trainer => {
                if(this.activeFilters.mentally && trainer.areas.includes('mentally')){
                  return true
                }
                if(this.activeFilters.physically && trainer.areas.includes('physically')){
                   return true
                }
                if(this.activeFilters.healthy && trainer.areas.includes('healthy')){
                    return true;
                }
                return false
            })

        },
        hasTrainers(){
            return this.$store.getters['trainers/hasTrainers']
        }
    },
    methods: {
        setFilters(updatedFilters){
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