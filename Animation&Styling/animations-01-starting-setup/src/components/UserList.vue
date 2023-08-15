<template>
      <transition-group tag="ul" name="user">
         <li v-for="user in users" :key="user" @click="removeUser(user)" >{{user}}</li>
      </transition-group>
    <div>
        <input type="text" ref="userName">
        <button @click="addUser">Add</button>
    </div>
</template>


<script>
export default{
    data() {
        return{
         users: ['Anthony','Ioan','Dragan','Pesho','Hazan']
        }
    },
    methods:{
        addUser(){
         const NameValue = this.$refs.userName.value
         this.users.unshift(NameValue)
         this.$refs.userName.value = ''    
        },
        removeUser(user){
           this.users = this.users.filter(usr => usr !== user)
        }
    }
}
</script>

<style scoped>
ul{
    list-style: none;
    margin: 1rem 0;
    padding: 0;
}
li{
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;   
};

.user-leave-from{
  opacity: 1;
  transform: translateX(0);
}
.user-leave-active {
    transition: all 1s ease-in;
    position:absolute;
}
.user-leave-to{
  opacity: 0;
  transform: translateX(30px);
}

.user-enter-from{
  opacity: 0;
  transform: translateX(-30px);
}
.user-enter-active {
    transition: all 1s ease-out;
}
.user-enter-to{
  opacity: 1;
  transform: translateX(0);
}

.user-move {
    transition: transform 0.8s ease;
}

</style>