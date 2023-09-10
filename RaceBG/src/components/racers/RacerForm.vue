<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="firstname">Firstname:</label>
            <input type="text" id="firstname" v-model.trim="firstName">
        </div>
        <div class="form-control">
            <label for="lastname">Lastname:</label>
            <input type="text" id="lastname" v-model.trim="lastName">
        </div>
        <div class="form-control">
            <label for="modelofcar">Model of car:</label>
            <input type="text" id="modelofcar" v-model.trim="cModel">
        </div>
        <div class="form-control">
            <label for="descripitonofcar">Description of car:</label>
            <textarea id="descriptionofcar" rows="5" v-model.trim="cDescription"></textarea>
        </div>
        <div class="form-control">
            <label for="bet">Bet:</label>
            <input type="number" id="bet" v-model.number="bet">
        </div>
        <div class="form-control">
            <h3>Tracks you have driven on:</h3>
            <div>
                <input type="checkbox" id="k1" value="k1" v-model="tracks">
                <label for="k1">Kaloyanovo Track</label>
            </div>
            <div>
                <input type="checkbox" id="s1" value="s1" v-model="tracks">
                <label for="s1">SaparevaBanya Track</label>
            </div>
            <div>
                <input type="checkbox" id="n1" value="n1" v-model="tracks">
                <label for="n1">Nurburgring Track</label>
            </div>
        </div>
        <base-button>Register</base-button>
    </form>
</template>


<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            cModel: '',
            cDescription: '',
            bet: null,
            tracks: []
        }
    },
    methods: {
        submitForm(){
            const formData = {
                first: this.firstName,
                last: this.lastName,
                carM: this.cModel,
                carD: this.cDescription,
                bet: this.bet,
                tracks: this.tracks
            }

            console.log(formData)
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>