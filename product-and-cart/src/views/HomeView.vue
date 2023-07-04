<template>
  <div class="home">
    <div class="splash-container">
        <div class="splash">
          <h1>Splendid Food</h1>
        </div>
      </div>

      <main class="wrapper">
        <div class="recommended">

     <ProductCart
     v-for="(p,i) in inventory.slice(0,3)"
    :key="p.id" 
    class="card"
    :i="i"
    :p="p"
    :addToCart="addToCart"
     />
      </div>

      </main>   
    </div>  
   </template>



<script>    
import ProductCart from '@/components/ProductCart.vue'

export default {
  name: 'Home',
  props: ['inventory','addToCart'],
  components: {
    ProductCart
  }
}
</script>