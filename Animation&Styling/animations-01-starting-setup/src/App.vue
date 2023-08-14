<template>
  <div class="container">
    <div class="block" :class="{animate: animationBlock}"></div>
    <button @click="animationStart">Animate</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
   <div class="container">
    <transition name="para">
      <p v-if="toggleParagraph">This paragraph is visible sometimes...</p>
    </transition>
    <button @click="toggleParagraphMethod">Toggle paragraph</button>
   </div>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
</template>  

<script>
export default {
  data() {
    return { 
      toggleParagraph: false,
      animationBlock: false,
      dialogIsVisible: false
     };
  },
  methods: {
    toggleParagraphMethod(){
      this.toggleParagraph = !this.toggleParagraph
    },
    animationStart(){
      this.animationBlock = true
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 1.4s ease-out;*/
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
 /* transform: translateX(-150px); */
 /*animation: left-slide 1.0s ease-out forwards; */
}

/*.v-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}*/

.para-enter-active {
  animation: left-slide 0.5s ease-out;
}

/*.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}*/

/*.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}*/

.para-leave-active {
  animation: left-slide 0.3s ease-out; 
}

/*.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}*/

@keyframes left-slide {

  0% {
    transform: translateX(0px) scale(1);
  }

  60% {
    transform: translateX(-90px) scale(1.2);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
  
}

</style>