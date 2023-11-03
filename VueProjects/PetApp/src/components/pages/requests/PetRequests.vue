<template>
  <div>
  <base-dialog :show="!!error" title="An error occured" @close="handleError">
   <p>{{ error }}</p>
 </base-dialog>
    <section>
        <base-card>
          <header>
            <h2>Messages Received</h2>
          </header>
            <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="hasMessages && !isLoading">
            <requests-item v-for="mes in messageReceived" :key="mes.id" :email="mes.email" :message="mes.message" :phoneNumber="mes.phoneNumber"></requests-item>
            </ul>
          <h3 v-else>You doesn't have any messages till now!</h3>
       </base-card>
    </section>
  </div>
</template>


<script>
import RequestsItem from './RequestsItem.vue'
export default {
   components: {
       RequestsItem
   },
   data(){
    return {
      error: null,
      isLoading: false
    }
   },
   computed:{
        messageReceived(){
            return this.$store.getters['messages/messages']
        },
        hasMessages(){
            return this.$store.getters['messages/hasMessages']
        }
   },
   created(){
    this.loadMessages()
   },
   methods: {
    handleError(){
      this.error = null
    },
    async loadMessages(){
      this.isLoading = true
      try{
        await this.$store.dispatch('messages/fetchMessages')
      } catch(error){
        this.error = error.message || 'Something has failed'
      }
      this.isLoading = false
    }
   }

}
</script>

<style scoped>
header {
  text-align: center;
}
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}
h3 {
  text-align: center;
}
</style>