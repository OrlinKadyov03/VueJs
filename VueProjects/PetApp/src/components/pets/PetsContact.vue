<template>
        <form @submit.prevent="submitForm">
            <div class="form-control">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="email">
            </div>
            <div class="form-control">
                <label for="message">Message:</label>
                <textarea id="message" v-model="message" rows="5"></textarea>
            </div>
            <div class="form-control">
                <label for="phoneNumber">Phone Number:</label>
                <input type="phoneNumber" id="phoneNumber" v-model="phoneNumber">
            </div>
            <div class="actions">
                <base-button mode="outline">Send</base-button>
            </div>
        </form>
</template>

<script>
export default {
    data(){
        return{
            email: '',
            message: '',
            phoneNumber: null,
            formIsValid: true
        }
    },
    methods: {
        submitForm(){
            this.formIsValid = true
            if(this.email === '' || !this.email.includes('@') || this.message === '' || !this.phoneNumber || this.phoneNumber.length < 0 ){
                this.formIsValid = false
                return
            }

            this.$store.dispatch('messages/contactPets',{
                email: this.email,
                message: this.message,
                phoneNumber: this.phoneNumber,
                petsId: this.$route.params.id

            })

            this.$router.replace('/pets')
        }
    }
}
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}
input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
.errors {
  font-weight: bold;
  color: red;
}
.actions {
  text-align: center;
}
</style>