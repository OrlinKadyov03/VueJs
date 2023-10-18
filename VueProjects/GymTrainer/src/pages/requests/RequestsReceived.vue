<template>
   <section>
    <base-card>
          <header>
        <h2>Requests Received</h2>
          </header>
        <ul v-if="hasRequests">
           <requests-item v-for="req in requestsReceived" :key="req.id" :email="req.userEmail" :message="req.message"></requests-item>
        </ul>
     <h3 v-else>You doesn't have any requests till now!</h3>
   </base-card>
   </section>
</template>

<script>
import RequestsItem from '../../requests/RequestsItem.vue'
export default {
    components: {
        RequestsItem
    },
   computed: {
    requestsReceived(){
        return this.$store.getters['requests/requests']
    },
    hasRequests(){
        return this.$store.getters['requests/hasRequests']
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