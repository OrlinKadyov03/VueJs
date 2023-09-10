<template>
    <div>
        <base-card>
        <h2>Racers registration</h2>
        <racer-form></racer-form>
        </base-card>
    </div>
</template>

<script>
import RacerForm from '../../racers/RacerForm.vue'
export default {
    components: {
        RacerForm
    }
}
</script>