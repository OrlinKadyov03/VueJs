<template>
  <div>
    <the-header></the-header>
    <router-view v-slot="slotProps">
        <transition name="route" mode="ease-in">
          <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
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
.route-enter-from {
  opacity: 0;
  transform: translateY(-70px);
}
.route-leave-to {
  opacity: 0;
  transform: translateY(80px);
}

.route-enter-active{
 transition: all 1s ease;
}

.route-leave-active{
  transition: all 0.5s ease-out
}

.route-enter-to,
.route-leave-from{
  opacity: 1;
  transform: translateY(0);
}
</style>