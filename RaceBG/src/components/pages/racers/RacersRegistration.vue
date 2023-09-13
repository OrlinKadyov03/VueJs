<template>
    <section>
        <base-card>
        <h2>Racers registration</h2>
        <racer-form @save-data="saveData"></racer-form>
        </base-card>
    </section>
</template>

<script>
import RacerForm from '../../racers/RacerForm.vue'
export default {
    components: {
        RacerForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('racers/registerRacer',data)
            this.$router.replace('/racers')
        }
    }
}
</script>