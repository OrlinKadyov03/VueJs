<template>
   <span class="badge" :class="type">
   {{ text }}
   </span>
</template>

<script>
export default {
    props: ['type','title'],
    computed: {
        text(){
            return this.title.toUpperCase()
        }
    }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.k1 {
  background-color: darkgoldenrod;
  color: white;
}

.s1 {
  background-color: darkorange;
  color: white;
}

.n1 {
  background-color: red;
  color: white;
}

</style>