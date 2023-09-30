<template>
    <div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-mobile-alt"></i>
                </div>
                <h4 class="specialty">Call me</h4>
                <p class="helping">0885624814</p>
            </div>
        </div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                 <i class="fa fa-map-marker-alt"></i>
                </div>
                <h4 class="specialty">Location</h4>
                <p class="helping">Velingrad</p>
            </div>
        </div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                 <i class="fa fa-envelope"></i>
                </div>
                <h4 class="specialty">Email</h4>
                <p class="helping">orlin221@abv.bg</p>
            </div>
        </div>
        <div class="service-item padd-15">
            <div class="service-item-inner">
                <div class="icon">
                 <i class="fa fa-globe-europe"></i>
                </div>
                <h4 class="specialty">Website</h4>
                <p class="helping">Orlin.Com</p>
            </div>
        </div>
       <section>
        <div><h2 class="sendEmail">Send me an E-mail</h2></div>
         <form @submit.prevent="sendInfo" class="forms">
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
          <h3 v-if="!formIsValid" class="incorrect">Fill the form correctly!</h3>
          <h3 v-if="hasSubmitted" class="submitted">You have submitted the form successfully!</h3>
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
              formIsValid: true,
              hasSubmitted: false
        }
    },
    methods: {
        sendInfo() {
            this.validateForm()

            
            if(!this.formIsValid){
              return
            }
  
            this.hasSubmitted = true
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

            setTimeout(() => {
                this.hasSubmitted = false
            }, 3000);
        }
    },
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
    top: -505px;
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
    top: -480px;
    font-size: 16px;
}


.btn {
    padding: 0;
    margin: 0;
    position: relative;
    left: 655px;
    top: -455px;
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
    top: -535px;
    font-size: 25px;
    font-weight: bold;
}

.btn:hover {
    color:white;
    border-color: rgb(255, 8, 95);
    background-color: rgb(255, 8, 95);
}

.incorrect {
    color: red;
    text-align: center;
    position: relative;
    top: -450px;
}

.submitted {
    font-size: 20px;
    color: aqua;
    text-align: center;
    position: relative;
    top: -450px;
}

.service-item {
        color: white;
        border-radius: 1px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 0.2rem;
        max-width: 20%; 
        justify-content: center;
        text-align: center;
        position: relative;
        top: 50px;
        margin-bottom: 24px;
    }


</style>