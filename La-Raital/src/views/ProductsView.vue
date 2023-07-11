<script setup>
import { useRoute,useRouter,RouterView } from "vue-router";
import products from "../data/products.json"

const route = useRoute()

const router = useRouter()

const productId = parseInt(route.params.id)

const product = products.find(p =>p.id === parseInt(route.params.id))

const showContact = () => {
    return router.push(`/products/${productId}/`)
}

</script>


<template>
    <div class="products" v-if="product">
        <h1>Product Id - {{product.id}}</h1>
        <p>Name: {{product.name}}</p>
        <p class="price">Price: {{product.price}}</p>
        <p>Id: {{product.id}}</p>
        <RouterView />
    </div>
</template>

<style scoped>
.products{
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.price{
    font-weight: bold;
}
</style>