<script setup>
import Question from "../components/Question.vue"
import QuizHeader from "../components/QuizHeader.vue"
import {useRoute}  from "vue-router"
import {ref,watch,computed} from "vue"
import quizes from "../data/quizes.json"
import Result from "../components/Result.vue"

const route = useRoute()

const quizId = parseInt(route.params.id)

const quiz = quizes.find(q => q.id === quizId)

const currentQuestionIndex = ref(0)

const questionStatus = computed(() => {return `${currentQuestionIndex.value}/${quiz.questions.length}`})

const barPercantage = computed(() =>`${currentQuestionIndex.value/quiz.questions.length * 100}%`)

const NumberOfCorrectAnswers = ref(0)

const showResults = ref(false)

const onOptionSelect = (isCorrect)=>{
  if(isCorrect) {
    NumberOfCorrectAnswers.value ++
  }
  if(quiz.questions.length - 1 === currentQuestionIndex.value)
  {
    showResults.value = true
  }
  currentQuestionIndex.value ++ 
} 


</script>

<template>
    <div>
       <QuizHeader
        :questionStatus="questionStatus"
        :barPercantage="barPercantage"
       />
         <div>
      <Question
       v-if="!showResults"
       :question="quiz.questions[currentQuestionIndex]" 
       @selectOption="onOptionSelect"
       />
       <Result v-else
       :quizQuestionLength="quiz.questions.length"
       :NumberOfCorrectAnswers="NumberOfCorrectAnswers"/>
         </div>
    </div>

</template>
