<template>
    <div class="divTwo">
        <h1 class="about">About Me</h1>
        <p class="aboutDesc">I have been studying HTML,CSS,C#,ASP.NET CORE for 3 + years. 
            I want to perform as a front-end developer. 
            I'm in the process of gaining more and more experiences at the moment. 
            I have done a lot of course-work. 
            I am so dedicated to my work,i give my best to any work regarding this field. 
            I have mastered programming languages such as - C#,JAVASCRIPT,VueJs,HTML,ASP.Net.</p>
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
                    <p class="pColor">Birthday : <span>21 june 2003</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Age : <span>20</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Website : <span>www.domain.com</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Email : <span>orlin221@abv.bg</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Degree : <span>CS</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Phone : <span>+359 88 562 4814</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">City : <span>Velingrad</span></p>
                </div>
                <div class="info-item padd-15">
                    <p class="pColor">Freelance : <span>Available</span></p>
                </div>
            </div>
            <div>
                <div class="buttons">
                    <router-link to="/contact" class="hide">Hire me</router-link>
                </div>
            </div>
        </div>
</template>

<style scoped>
.about {
    position: relative;
    left: 10px;
    top: -75px;
    color: white;
}

.aboutDesc {
    position: relative;
    left: -100px;
    top: -45px;
    color: rgb(188, 167, 167);;
    font-size: 20px;
}

.divTwo {
  margin: 0;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(8px);
  padding: 110px;
}

.personal-info {
    position: relative;
    top: -220px;
    left: 15px;
}

.info-item  .pColor  {
    color: white;
    border-radius: 5px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 1rem auto;
    max-width: 30rem;
    position: relative;
    left: -370px;
    top: -270px;
}

a {
  padding: 0.65rem 1.5rem;
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
  margin: 2rem auto;
  max-width: 40rem;
  position: relative;
  top: -125px;
  left: 360px;
}
.education {
    color: white;
}

.pS {
  color: rgb(24, 93, 149);
  font-size: bold;
}

.hS {
   color: white;
   font-size: bold;
}


</style>