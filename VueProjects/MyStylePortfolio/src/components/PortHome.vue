<template>
    <div>
        <h2 class="name">Hello, my name is {{ name }}</h2>
        <h3 class="portfolio">Welcome to my portfolio</h3>
        <p class="desc">I'm a Junior Developer. Working with Object Oriented Programming language - C#.</p>
        <p class="descTwo">Javascript,VueJs,HTML,CSS,SASS,BootStrap,ASP.NET and more.</p>
        <button class="cv">Download CV</button>
    </div>
    <div class="frame">
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
  right: 470px;
  top: 120px;
}
.portfolio {
    text-align: center;
    position: relative;
    right: 485px;
    top: 110px;
}

.cv {
    position: relative;
    left: 230px;
    top: 130px;
    border-radius: 12px;
    border: none;
    height: 40px;
    width: 120px; 
    background-color: rgb(95, 10, 95);
    color: white;
    font-family:Arial, Helvetica, sans-serif;
    cursor: pointer;
}

.desc {
    position: relative;
    left: 50px;
    top: 120px;
    margin-top: 10px;
}


.descTwo {
    position: relative;
    left: 50px;
    top: 120px;
    margin-top: -10px;
}
html {
  background-color: black;
  height: 100%;
}

img {
  max-height: 20%;
  max-width: 20%;
  margin-left: 1100px;
  margin-top: -75px
}



</style>


