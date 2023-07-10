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
    <div v-if="product">
        <h1>Product View</h1>
        <p>Name: {{product.name}}</p>
        <p>Price: {{product.price}}</p>
        <p>Id: {{product.id}}</p>
        <RouterView />
    </div>
</template>