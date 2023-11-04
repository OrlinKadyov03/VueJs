<template>
  <base-container title="Vuex">
  <the-counter></the-counter>
  <button @click="AddOne">Add 10</button>
  <chamge-counter></chamge-counter>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue'
import ChamgeCounter from './components/ChangeCounter.vue'
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChamgeCounter
  },
  methods: {
    AddOne(){
      this.$store.commit('increase', { value: 10 })
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