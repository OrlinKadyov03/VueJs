<template>
  <base-container title="Vuex" v-if="Auth">
  <the-counter></the-counter>
  <favourite-value></favourite-value>
  <button @click="AddOne">Add 10</button>
  <chamge-counter></chamge-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import ChamgeCounter from './components/ChangeCounter.vue'
import FavouriteValue from './components/FavouriteValue.vue'
import UserAuth from './components/UserAuth.vue'
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChamgeCounter,
    FavouriteValue,
    UserAuth
  },
  methods: {
    AddOne(){
      this.$store.dispatch('numbers/increase', { value: 10 })
    }
  },
  computed: {
        Auth(){
            return this.$store.getters.AuthGet
        }
    }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>