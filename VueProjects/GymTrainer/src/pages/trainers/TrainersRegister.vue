<template>
    <section>
        <base-card>
        <h2>Register as a Trainer now.</h2>
        <trainers-form @save-data="sendForm"></trainers-form>
        </base-card>
    </section>
</template>

<script>
import TrainersForm from '../../components/trainers/TrainersForm.vue'
    export default {
    components: {
        TrainersForm
    },
    methods: {
        sendForm(data){
           this.$store.dispatch('trainers/registerTrainer',data)
           this.$router.replace('/trainers')
        }
    }
}
</script>