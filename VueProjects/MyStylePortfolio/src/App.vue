<template>
  <div>
     <ther-header></ther-header>  
     <router-view></router-view> 
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>