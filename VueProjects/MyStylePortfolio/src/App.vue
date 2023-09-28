<template>
  <div>
    <the-header></the-header>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
 components: {
  TheHeader
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
  background-image: url("./back.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(8px);
  padding: 50px;
}
</style>