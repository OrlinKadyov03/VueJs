<template>
    <div>
        <h2 class="name">Hello, my name is {{ name }}</h2>
        <h3 class="portfolio">Welcome to my portfolio</h3>
        <p class="desc">I'm a Junior Developer. Working with Object Oriented Programming language - C#.</p>
        <p class="descTwo">Javascript,VueJs,HTML,CSS,SASS,BootStrap,ASP.NET and more.</p>
        <button class="cv">Download CV</button>
    </div>
    <div>
     <img src="../../src/me.jpg" alt="Me" />
    </div>
</template> 


<script>
export default {
  data(){
    return{
      name: 'Orlin Videnov' 
    }
  },
}
</script>

<style scoped> 

.name {
  text-align: center;
  position: relative;
  right: 485px;
  top: 120px;
  color: rgb(188, 167, 167);
}
.portfolio {
    text-align: center;
    position: relative;
    right: 570px;
    top: 110px;
    color: rgb(188, 167, 167);
}

.cv {
    position: relative;
    left: 20px;
    top: 140px;
    border-radius: 12px;
    border: none;
    font-weight: bold;
    height: 40px;
    width: 140px; 
    background-color: rgb(205, 17, 89);
    color: rgb(188, 167, 167);
    font-family:Arial, Helvetica, sans-serif;
    cursor: pointer;
}

.desc {
    position: relative;
    left: 20px;
    top: 120px;
    margin-top: 10px;
    color: rgb(188, 167, 167);
    font-size: 20px;
}


.descTwo {
    position: relative;
    left: 20px;
    top: 120px;
    margin-top: -10px;
    color: rgb(188, 167, 167);
    font-size: 20px;
}
html {
  background-color: black;
  height: 100%;
}

img {
  max-height: 20%;
  max-width: 20%;
  margin-left: 1000px;
  margin-top: -95px;
  border-radius: 15px;
}

button:hover,
button:active { 
  border-color: rgb(255, 8, 95);
  background-color: rgb(255, 8, 95);
  color: white;
}



</style>


