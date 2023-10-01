<template>
    <div>
    <div class="divTwo">
        <h2 class="about">About Me</h2>
        <p class="aboutDesc">I have been studying C#,ASP.Net,HTML,CSS,My SQL for 3 + years.
            Javascript,VueJs,BootStrap Library for 6 months. Firebase too.
            I'm in the process of gaining more and more experiences at the moment.
            Have a lot's of course work done, you can check it in my Github Account,with 
            description and everything you need to see and understand how the code is written.
        </p>
        </div>
        <div class="card">
          <h4 class="education">Education: </h4>
          <h5 class="pS">Primary Education:</h5>
          <h6 class="hS">High School "Vasil Levski"</h6>
          <h5 class="pS">Secondary Education:</h5>
          <h6 class="hS">High School "Vasil Levski"</h6>
          <h5 class="pS">High-Level Education:</h5>
          <h6 class="hS">PU "Paisii Hilendarski"</h6>
        </div>
            <div class="personal-info padd-15">
              <div class="row">
                <div class="info-item padd-15">
                    <p class="pColor">Github : <a class="github" href="https://github.com/OrlinKadyov03">Go to</a></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Email : <span>orlin221@abv.bg</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Degree : <span>Professional Mathematics</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Phone : <span>+359 88 562 4814</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">City : <span>Velingrad</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Freelance : 
                        <span @click="Available" v-if="isAvailable">Not available</span>
                        <span v-else>Available</span>
                    </p>
                </div>
            </div>
            <div class="container">
                <h3 class="review" >You like my review ?</h3>
                <h3 class="review">Then you can</h3>
            </div>
            <div>
                <div class="buttons" v-if="!isAvailable">
                    <router-link to="/contact" class="hide">Hire me</router-link>
                </div>
                <div class="notAvailable" v-else>
                     <h3>Wait till I'm available!</h3>
                </div>
                <div class="iTwo">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-github"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-google"></i>
                    <i class="bi bi-linkedin"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data () {
        return {
            isAvailable: false
        }
    },
    methods: {
        Available(){
          if(this.iSAvailable === false) {
            this.iSAvailable = true
          }
        }
    }
}

</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
.about {
    position: relative;
    left: 70px;
    top: -25px;
    color: white;
}

.aboutDesc {
    position: relative;
    left: 10px;
    top: -25px;
    color: rgb(188, 167, 167);
    font-size: 20px;
}

.divTwo {
  margin: 10px;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(8px);
  padding: 20px;
}

.personal-info {
    position: relative;
    top: -120px;
    left: 15px;
}

.info-item  .pColor  {
    color: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 0.5rem auto;
    max-width: 30rem;
    position: relative;
    left: -370px;
    top: -250px;
    font-weight: bold;
}

a {
  padding: 0.75rem 2.5rem;
  font: inherit;
  background-color:  rgb(205, 17, 89);
  border: 1px solid  rgb(205, 17, 89);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 1rem;
  display: inline;
  position: relative;
  left: 270px;
}
.hide {
    text-decoration: none;
    color: rgb(188, 167, 167);
    left: 640px;
    top: -70px;
}

a:hover,
a:active { 
  border-color: rgb(255, 8, 95);
  background-color: rgb(255, 8, 95);
  color: white;
}

.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 1.5rem auto;
  max-width: 30rem;
  position: relative;
  top: 10px;
  left: 360px;
}
.education {
    color: white;
}

.pS {
  color: rgb(24, 93, 149);
  font-weight: bold;
  font-size: 15px;
}

.hS {
   color: white;
   font-weight: bold;
   font-size: 12px;
}

.review {
 text-align: center;
 padding: 0;
 top: -90px;
 position: relative;
 color: white;
}

.iTwo {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.github {
    color: rgb(188, 167, 167);;
    display: inline;
    text-decoration: none;
    left: 10px;
    padding: 0.55rem 1.5rem;
}

.notAvailable {
    text-align: center;
    color: rgb(134, 9, 9);
    position: relative;
    top: -75px;
}


</style>