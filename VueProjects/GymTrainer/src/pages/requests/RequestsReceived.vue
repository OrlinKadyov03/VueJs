<template>
   <div>
    <base-dialog :show="!!error" title="An error occurred" @close="handleError">
        <p>{{ error }}</p>
        </base-dialog>
      <section>
        <base-card>
              <header>
            <h2>Requests Received</h2>
              </header>
              <base-spinner v-if="isLoading"></base-spinner>
            <ul v-else-if="hasRequests && !isLoading">
              <requests-item v-for="req in requestsReceived" :key="req.id" :email="req.userEmail" :message="req.message"></requests-item>
            </ul>
        <h3 v-else>You doesn't have any requests till now!</h3>
      </base-card>
      </section>
  </div>
</template>

<script>
import RequestsItem from '../../requests/RequestsItem.vue'
export default {
    components: {
        RequestsItem
    },
    data(){
      return {
        isLoading: false,
        error: null
      }
    },
   computed: {
    requestsReceived(){
        return this.$store.getters['requests/requests']
    },
    hasRequests(){
        return this.$store.getters['requests/hasRequests']
    }
   },
   created(){
     this.loadRequests()
   },
   methods: {
    async loadRequests(){
      this.isLoading = true
      try {
        await this.$store.dispatch('requests/fetchRequests')
      } catch (error) {
        this.error = error.message || 'Something has failed'
      }
      this.isLoading = false
    },
    
    handleError(){
    this.error = null
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