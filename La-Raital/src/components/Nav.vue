<script setup>

import {RouterLink} from "vue-router"

</script>


<template>
    <div class="route">
        <RouterLink  active-class="active" to="/">Home</RouterLink>
        <RouterLink  active-class="active" to="/about">About</RouterLink>
    </div>
</template>

<style scoped>
.active{
  font-weight: 900;
  color: rgb(33, 32, 29)
}
</style>
