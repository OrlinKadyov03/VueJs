<script setup>
import products from "../data/products.json"
import { RouterLink } from "vue-router";
</script>

<template>
    <div>
        <h1 class="heading">La Raital</h1>
        <div class="products">
            <RouterLink :to="`/products/${product.id}`" v-for="product in products" :key="product.id"><img class="img" :src="product.img" alt=""></RouterLink>
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
    margin: 10px;

}

.heading{
    text-align:left;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.img{
    width: 150px;
    height: 150px;
    border-radius: 15px;
}

</style>