<template>
    <section>
        <base-card>
          <header>
            <h2>Messages Received</h2>
          </header>
          <ul v-if="hasMessages">
            <requests-item v-for="mes in messageReceived" :key="mes.id" :email="mes.userEmail" :message="mes.message" :phoneNumber="mes.phoneNumber"></requests-item>
          </ul>
          <h3 v-else>You doesn't have any messages till now!</h3>
       </base-card>
    </section>
</template>


<script>
import RequestsItem from './RequestsItem.vue'
export default {
   components: {
       RequestsItem
   },
   computed:{
        messageReceived(){
            return this.$store.getters['messages/messages']
        },
        hasMessages(){
            return this.$store.getters['messages/hasMessages']
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