<template>
    <div>
        <h2 class="name">Hello, my name is Orlin Videnov</h2>
        <h3 class="portfolio">Welcome to my portfolio</h3>
    </div>
    <div class="frame">
     <img src="../../src/me.jpg" alt="Me" />
    </div>
</template> 

<style scoped> 

.name {
  text-align: center; 
}
.portfolio {
    text-align: center;
}

html {
  background-color: black;
  height: 100%;
}

img {
  max-height: 100%;
  max-width: 100%;
}

.frame {
  background-color:#aaa;
  border: solid 3vmin white;
  border-bottom-color: grey;;
  border-left-color: #eee;
  border-radius: 2px;
  border-right-color: #eee;
  border-top-color: #ddd;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25) inset,
    0 5px 10px 5px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  display: inline-block;
  margin-left: 70vw;
  height: 65vh;
  padding: 3vmin;
  position: relative;

}

</style>


