<template>
  <the-header></the-header>
  <form-short></form-short>
  <router-view></router-view>
</template>

<script>
import FormShort from './components/FormShort.vue'
import TheHeader from './components/layout/TheHeader.vue'
export default {
  components:{
     TheHeader,
     FormShort
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
  margin: 0;
}

</style>
