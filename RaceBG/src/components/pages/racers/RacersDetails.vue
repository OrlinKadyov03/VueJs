<template>
       <section>
           <base-card>
             <h2>Name - {{ fullName }}</h2>
             <h3>Bet - ${{ betTo }}</h3>
           </base-card>
         </section>
       <section>
        <base-card>
           <header>   
            <h2>Lets race!</h2>
            <base-button link :to="contactLink">Contact</base-button>
           </header>
            <router-view></router-view>
       </base-card>
       </section>
           <section>
             <base-card>
                   <base-badge v-for="track in tracks" :key="track.id" :type="track" :title="track">{{ tracks }}</base-badge>
                   <h2>Car Model: {{ cmodel }}</h2>
                   <h3>Car description: </h3>
                   <p>{{ cdescription }}</p>
            </base-card>
          </section>
</template>


<script>
export default {
   props: ['id'],
   data() {
        return {
                selectedRacer: null,
        }
   },
   computed: {
        fullName(){
          return this.selectedRacer.firstName + ' ' + this.selectedRacer.lastName
        },
        contactLink(){
          return `/racers/${this.id}/contact`
        },
        tracks(){
          return this.selectedRacer.tracks
        },
        betTo(){
          return this.selectedRacer.bet
        },
        cmodel() {
          return this.selectedRacer.cmodel
        },
        cdescription() {
           return this.selectedRacer.cdescription
        }
   },
   created() {
        this.selectedRacer = this.$store.getters['racers/racers'].
        find(coach => coach.id === this.id)
   }
}
</script>