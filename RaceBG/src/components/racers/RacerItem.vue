<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>{{ description }}</h4>
        <h4>${{ bet }}</h4>
        <div>
            <base-badge v-for="track in tracks" :key="track" :type="track" :title="track">{{track}}</base-badge>
        </div>
        <div class="actions">
            <base-button mode="outline" :to="contactLink">Contact</base-button>
            <base-button link :to="detailLink">View Details</base-button>
        </div>
    </li>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'
export default {
  components: { BaseButton },
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

<style scoped>

li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}
div {
  margin: 0.5rem 0;
}
.actions {
  display: flex;
  justify-content: flex-end;
}
</style>