<template>
 <h1>My Friends</h1>
  <header>
    <ul>
      <friend-contact
       name="Orlin"
       phone-number="123456789" 
       email-address="orlin221@abv.bg"
       ></friend-contact>
       <friend-contact
       name="Veso"
       phone-number="912345678" 
       email-address="vesso@abv.bg"
       ></friend-contact>
    </ul>
  </header>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  name: 'App',
  components: {
    FriendContact
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
