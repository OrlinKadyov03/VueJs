<template>
    <base-error-alert v-if="isInvalid" name="Invalid input" @close="confirmError">
    <template #default>
       <p>Unfortunately at least one is invalid!</p>
       <p>Please enter again the information</p>
    </template>
    <template #actions> 
      <base-button @click="confirmError">Okay</base-button>
    </template>
   </base-error-alert>
    <base-card>
    <h2>Add Resources</h2>
    <form @submit.prevent="sendData">
        <div class="form-control">
        <label for="name">Name:</label>
        <input id="name" name="name" type="text" ref="nameInput" >
        </div>

        <div class="form-control">
        <label for="description">Description:</label>
        <textarea id="name" name="name" rows="3" ref="description" ></textarea>
        </div>

        <div class="form-control">
        <label for="link">Link:</label>
        <input id="link" name="link" type="url" ref="linkInput" >
        </div>
        <div>
            <base-button type="submit">Add</base-button>
        </div>

    </form>
    </base-card>
</template>

<script>

export default {
    data(){
        return {
            isInvalid: false
        }
    },
    methods:{
        sendData(){
           const enteredName = this.$refs.nameInput.value
           const enteredDesc = this.$refs.description.value
           const enteredLink = this.$refs.linkInput.value

           if(enteredName.trim() === '' || enteredDesc.trim() === '' || enteredLink.trim() === ''){
            this.isInvalid = true
            return
           }

           this.addResource(enteredName,enteredDesc,enteredLink)
        },
        confirmError(){
            this.isInvalid = false
        }
    },
    inject: ['addResource']
}

</script>

<style scoped>

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}

</style>