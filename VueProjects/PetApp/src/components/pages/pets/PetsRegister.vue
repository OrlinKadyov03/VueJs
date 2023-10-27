<template>
    <div>
        <pets-form @save-data="submitForm"></pets-form>
    </div>
</template>

<script>
import PetsForm from '../../../components/pets/PetsForm.vue'
export default {
 components: {
    PetsForm
 },
 methods:{
    submitForm(data){
        this.$store.dispatch('pets/registerPet',data)
        this.$router.replace('/pets')
    }
 }
}
</script>