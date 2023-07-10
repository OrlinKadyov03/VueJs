<script setup>
import products from "../data/products.json"
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <h1>La Raital</h1>
        <div class="products">
            <RouterLink :to="`/products/${product.id}`" v-for="product in products" :key="product.id">{{product.name}}</RouterLink>
        </div>
    </div>
</template>

<style scoped>
.products{
    display: flex;
}
.products a {
    text-decoration: none;
    color: black;
    width: 100%;
    box-shadow: 1px 1px 1px rgb(0, 0, 0,0.166);
    margin: 10px

}
</style>