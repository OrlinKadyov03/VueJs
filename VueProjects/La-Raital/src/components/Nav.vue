<script setup>

import {RouterLink} from "vue-router"

</script>


<template>
    <div class="route">
        <RouterLink class="home" active-class="active" to="/">Home</RouterLink>
        <RouterLink class="about" active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
.about{
  text-decoration: none;
  float: left;
}
.home{
  text-decoration: none;
  float: left;
}
.active{
  font-weight: 900;
  color: rgb(33, 32, 29);  
}
.route{
  color: #000;
  text-decoration: none;
  font-size: 20px;
  padding: 25px;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  justify-content: center;
  background-color: aquamarine;

}
</style>
