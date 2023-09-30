<template>
    <div>
       <section>
         <form class="forms">
          <div class="firstName">
           <input type="text" v-model.trim="firstName" placeholder="FirstName">
          </div>
          <div class="lastName">
           <input type="text" v-model.trim="lastName" placeholder="LastName">
          </div>
          <div class="email">
           <input type="email" v-model.trim="email" placeholder="Email">
          </div>
          <div class="subject">
           <input class="subject" type="text" v-model.trim="subject" placeholder="Subject">
          </div>
          <div class="message">
           <textarea v-model.trim="message" placeholder="Message"></textarea>
          </div>
         </form>
       </section> 
    </div>
</template>

<script>
export default {
    data(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    }
}
</script>



<style scoped>
input {
    width: 20%;
    padding: 8px 10px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
}


</style>