<template>
    <router-view v-slot="slotProps">
      <transition name="fade-button" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
</template>  

<script>



export default {
  data() {
    return { 
      activeButton: false,
      toggleParagraph: false,
      animationBlock: false,
      dialogIsVisible: false,
      enterInterval: null,
      leaveInterval: null
     };
  },
  methods: {
    leaveCancelled(el){
      console.log(el)
      clearInterval(this.leaveInterval)
    },
    enterCancelled(el){
      console.log(el)
      clearInterval(this.enterInterval)
    },
    afterLeave(el){
      console.log('After Leave')
      console.log(el)
    },
    leave(el,done){
      console.log('Leave')
      console.log(el)
      let round = 100
      this.leaveInterval = setInterval(() => {
        el.style.opacity = round * 0.01
        round--
        if(round < 0){
          clearInterval(this.leaveInterval)
          done()
        }
      }, 20);
    },
    beforeLeave(el){
       console.log('Before Leave')
       console.log(el)
       el.style.opacity = 1
    },
    afterEnter(el){
      console.log('After Enter')
      console.log(el)
    },
    enter(el,done){
      console.log('Enter')
      console.log(el)
      let round = 1
     this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01
        round++
        if(round > 100){
          clearInterval(this.enterInterval)
          done()
        }
      }, 20);
    },
    beforeEnter(el){
       console.log('Before Enter')
       console.log(el)
       el.style.opacity = 0
    },
    hideButton(){
      this.activeButton = false
    },
    showButton(){
      this.activeButton = true
    },
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


/*.v-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}*/

/*.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}*/

/*.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}*/


/*.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}*/

.route-enter-from {}
.route-enter-active {
  animation: left-slide 0.4s ease-out;
}
.route-enter-to {}


.route-leave-active{
  animation: left-slide 0.4s ease-in;
}
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

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-button-leave-active{
  transition: opacity 0.3s ease-in;
}

.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}


</style>