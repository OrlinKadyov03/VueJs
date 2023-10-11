<template>
    <li>
      <h3>{{ fullName }}</h3>
      <h4>${{ rate }}/hour</h4>
      <div>
       <router-link :to="linkToContact">Contact</router-link>
       <router-link :to="linkToDetails">View Details</router-link>
      </div>
    </li>
</template>

<script>
export default {
    props: ['id','firstName','lastName','rate','areas'],
    computed: {
        fullName(){
            return this.firstName + ' ' + this.lastName;
        },
        linkToContact(){
            return this.$route.path + '/' + this.id + '/contact'
        },
        linkToDetails(){
            return this.$route.path + '/' + this.id
        }
    }
}
</script>

