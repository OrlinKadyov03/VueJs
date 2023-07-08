<script setup>
  import { defineProps } from "vue";

  import { RouterLink } from "vue-router";

  const {NumberOfCorrectAnswers,quizQuestionLength} = defineProps(["quizQuestionLength","NumberOfCorrectAnswers"])
</script>
 
<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>
            {{NumberOfCorrectAnswers}}/{{quizQuestionLength}}
        </h1>
        <RouterLink class="buttonBack" to="/">Go Back</RouterLink>
    </div>
</template>

<style scoped>
.results{
    text-align: center;
    padding: 100px 0;
}

p {
    font-size: 25px;
}

.h1 {
    font-size: 80px;
}

.buttonBack{
  align-items: center;
  background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #FFFFFF;
  display: flex;
  font-family: Phantomsans, sans-serif;
  font-size: 20px;
  justify-content: center;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  padding: 19px 24px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;;
}

.buttonBack:active,
.buttonBack:hover {
  outline: 0;
}

@media (min-width: 768px) {
  .buttonBack {
    font-size: 24px;
    min-width: 196px;
  }
}
</style>