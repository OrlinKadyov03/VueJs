<template>
    <div>
       <section>
        <div><h2 class="sendEmail">Send me an E-mail</h2></div>
         <form @submit.prevent="sendInfo" class="forms">
            <h3 v-if="!formIsValid">Fill the form correctly</h3>
          <div class="firstName">
           <input type="text" v-model.trim="firstName" placeholder="FirstName" id="firstname">
          </div>
          <div class="lastName">
           <input type="text" v-model.trim="lastName" placeholder="LastName" id="lastname">
          </div>
          <div class="email">
           <input type="email" v-model.trim="email" placeholder="Email" id="email">
          </div>
          <div class="subject">
           <input class="subject" type="text" v-model.trim="subject" placeholder="Subject" id="subject">
          </div>
          <div class="message">
           <textarea v-model.trim="message" placeholder="Message" id="message"></textarea>
          </div>
          <button class="btn">Send</button>
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
              message: '',
              formIsValid: true
        }
    },
    methods: {
        sendInfo() {
            this.validateForm()

            
            if(!this.formIsValid){
              return
            }

            console.log('FirstName:', this.firstName);
            console.log('LastName:', this.lastName);
            console.log('Email:', this.email);
            console.log('Subject:', this.subject);
            console.log('Message:', this.message);
            console.log('Sent');
            this.firstName = ''
            this.lastName = ''
            this.email = ''
            this.subject = ''
            this.message = ''

        },
        validateForm() {
            this.formIsValid = true
            if(this.firstName === ''){
                this.formIsValid = false
            }
            if(this.lastName === ''){
                this.formIsValid = false
            }
            if(this.email === '' || !this.email.includes('@') ){
                this.formIsValid = false
            }
            if(this.subject === ''){
                this.formIsValid = false
            }
            if(this.message === ''){
                this.formIsValid = false
            }
        }
    }
}
</script>



<style scoped>
input {
    width: 30%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    position: relative;
    top: 5px;
    font-size: 16px;
}

input:focus {
    background-color:aliceblue;
}

.firstName {
    display: flex;
    justify-content: center;
    align-items: center; 
}

.lastName {
    display: flex;
    justify-content: center;
    align-items: center;  
}

.email {
    display: flex;
    justify-content: center;
    align-items: center; 
}

.subject {
    display: flex;
    justify-content: center;
    align-items: center; 
}

.message {
    display: flex;
    justify-content: center;
    align-items: center; 
    position: relative;
    top: 20px;
    font-size: 16px;
}


.btn {
    padding: 0;
    margin: 0;
    position: relative;
    left: 655px;
    top: 45px;
    padding: 0.75rem 2.5rem;
    font: inherit;
    background-color:  rgb(205, 17, 89);
    border: 1px solid  rgb(205, 17, 89);
    color: rgb(188, 167, 167);
    cursor: pointer;
    border-radius: 30px;
    margin-right: 1rem;
    display: inline;
    position: relative;
}
.sendEmail {
    justify-content: center;
    text-align: center;
    color: rgb(176, 160, 160);
    position: relative;
    top: 5px;
    font-size: 25px;
    font-weight: bold;
}

.btn:hover {
    color:white;
    border-color: rgb(255, 8, 95);
    background-color: rgb(255, 8, 95);
}

</style>