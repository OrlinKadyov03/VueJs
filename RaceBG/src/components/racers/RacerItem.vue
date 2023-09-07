<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>{{ description }}</h4>
        <h4>${{ bet }}</h4>
        <div>
            <span v-for="track in tracks" :key="track">{{track}}</span>
        </div>
        <div class="actions">
            <router-link :to="contactLink">Contact</router-link>
            <router-link :to="detailLink">View Details</router-link>
        </div>
    </li>
</template>

<script>
export default {
  props: ['id','firstName','lastName','description','tracks','bet'],
  computed:{
    fullName(){
       return this.firstName + ' ' + this.lastName
    },
    contactLink(){
        return `/racers/${this.id}/contact`
    },
    detailLink(){
        return `/racers/${this.id}`
    }
    
  },
}
</script>