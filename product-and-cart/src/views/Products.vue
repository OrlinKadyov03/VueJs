<template>
  <main class="wrapper">
        <h1>Products</h1>
        <div class="card-container">
          <ProductCart
         v-for="(p,i) in inventory.slice(0,6)"
         :key="p.id" 
         class="card"
         :i="i"
         :p="p"
         :addToCart="addToCart"
          />
        </div>
      </main>
</template>

<script>
import ProductCart from '@/components/ProductCart.vue'
export default{
  props:['inventory','addToCart'],
  components:{
      ProductCart
  }
}

</script>












