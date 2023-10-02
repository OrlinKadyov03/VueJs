<template>
    <div>
        <div class="row">
            <div class="service-item-inner">
                <div class="icon">
                 <i class="fa fa-map-marker-alt"></i>
                </div>
                <h4 class="specialty">Location</h4>
                <p class="helping">Velingrad</p>
            </div>
            <div class="service-item-inner">
                <div class="icon">
                <i class="fa fa-mobile-alt"></i>
                </div>
                <h4 class="specialty">Call me</h4>
                <p class="helping">0885624814</p>
            </div>
            <div class="service-item-inner">
                <div class="icon">
                 <i class="fa fa-envelope"></i>
                </div>
                <h4 class="specialty">Email</h4>
                <p class="helping">orlin221@abv.bg</p>
            </div>
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
       <div class="iTwo">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-google"></i>
                    <i class="bi bi-linkedin"></i>
        </div>
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
            console.log('sent')
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
        },
        resizeTextarea() {
      const textarea = this.$refs.messageTextarea; // Reference to the textarea element
      textarea.style.height = "auto"; // Reset the height to auto
      textarea.style.height = textarea.scrollHeight + "px"; // Set the height to match the scroll height
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
    top: -20px;
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
    top: -5px;
    font-size: 16px;
}


.btn {
    padding: 0;
    margin: 0;
    position: relative;
    left: 655px;
    top: 10px;
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
    top: -15px;
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
    top: 0px;
}

.submitted {
    font-size: 20px;
    color: aqua;
    text-align: center;
    position: relative;
    top: 0px;
}
.row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
    position: relative;
    justify-content: center;
}

.service-item-inner {
    justify-content: center;
    text-align: center;
    margin-top: 30px;
    border-spacing: 5px 1rem;
    flex: 0 0 50%;
    max-width: 20%;
    font-weight: bold;
}

i {
    color: rgb(255, 0, 217);
    font-size: 20px;
    font-weight: bold;
}

.iTwo {
    display: flex;
    gap: 10px;
}


.specialty {
    color: white;
}
.helping { 
    color: white;
}


.message textarea {
  width: 30%;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 14px;
  min-height: 50px; /* Set a minimum height */
  overflow-y: hidden; /* Hide vertical scrollbar */
}


</style>