<template>
    <div>
   <section>
     <base-card>
       <h3>{{ fullName }}</h3>
       <h4>${{ rate }}/hour</h4>
     </base-card>
   </section>
   <section>
    <base-card>
     <h3>Interested? Reach out now!</h3>
     <base-button link :to="contactLink">Contact</base-button>
    </base-card>
   </section>
   <section>
    <base-card>
     <base-badge v-for="area in selectedTrainer.areas" :key="area" :type="area" :title="area"></base-badge>
     <p>{{ description }}</p>
    </base-card>
   </section>
</div>
</template>

<script> 
export default {
    props: ['id'],
    data() {
        return {
           selectedTrainer: null 
        }
    },
    computed: {
      fullName(){
        return this.selectedTrainer.firstName + ' ' + this.selectedTrainer.lastName
      },
      rate(){
        return this.selectedTrainer.hourlyRate
      },
      contactLink(){
        return this.$route.path + '/' + this.id + '/contact'
      },
      description(){
        return this.selectedTrainer.description
      },
      areas(){
        return this.selectedTrainer.areas
      }
    },
    created() {
        this.selectedTrainer = this.$store.getters['trainers/trainers'].find(
            (trainer) => trainer.id === this.id
        )
    }
}
</script>