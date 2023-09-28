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
    left: 10px;
    top: -45px;
    color: rgb(188, 167, 167);;
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
    top: -120px;
    left: 20px;
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
    top: -20px;
}

.buttons {
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color:  rgb(205, 17, 89);
  border: 1px solid  rgb(205, 17, 89);
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
  position: relative;
  left: 270px;
}

a:hover,
a:active,
button:hover,
button:active {
  padding: 0.25rem 1rem;
  font: inherit;
  cursor: pointer;
  border-radius: 10px;
  margin-right: 0rem;
  display: inline-block;
}

.hide {
    text-decoration: none;
    color: white;

}




</style>