<script setup>

import quizes from "../data/quizes.json"
import {RouterLink} from "vue-router"


</script>

<template>
    <div>
      <h1>Home View</h1>
        <div class="quiz">
            <RouterLink :to="`/quizes/${quiz.id}`" v-for="quiz in quizes" :key="quiz.id"><img :src="quiz.img">{{quiz.name}}</RouterLink>
       </div>
    </div>
</template>