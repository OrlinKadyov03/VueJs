<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  data(){
    return{
      changesSaved: false
    }
  },
  methods:{
    confirmInput(){
      this.$router.push('/teams')
    },
    saveChanges(){
      this.changesSaved = true
    }
  },
  inject: ['users'],
  beforeRouteEnter(to,from,next){
    console.log('Users list cmp')
    console.log(to,from)
    next()
  },
  beforeRouteLeave(to,from,next){
    console.log('Users beforeRouteLeave')
    console.log(to,from)
    if(this.changesSaved){
      next()
    }
    else{
      const userUnsavedChanges =  confirm('Are you sure,you have unsaved changes!')
      next(userUnsavedChanges)
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>