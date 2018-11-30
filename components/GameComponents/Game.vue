<template>
<div>
  <transition name="slide-right-to-left" mode="in-out">
    <b-card
      :title="questionTitle"
      v-if="questionReady"
      variant="transparent"
      class="game-card"
      align-self="center"
      key="game"
    >
      <h2 class="card-text text-center h5 text-white" v-html="question.question"></h2>
      <b-button-group vertical size="lg" class="btn-block">
        <b-container>
          <b-row class="align-items-center min-100">
            <b-col>
              <b-button
                v-for="(answer, index) in answers"
                :key="index"
                class="btn-block answer"
                @click="checkAnswer"
                v-html="answer"
              ></b-button>
            </b-col>
          </b-row>
        </b-container>
      </b-button-group>
    </b-card>
  </transition>
  
</div>
</template>

<script>
import SettingsIcon from '~/components/SettingsComponents/SettingsIcon.vue'
export default {
  data() {
    return {
      transition: 'question-left-to-right'
    }
  },
  components: {
SettingsIcon
  },
  computed: {
    question() {
      return this.$store.state.question
    },
    answers() {
      return this.$store.state.answers
    },
    questionTitle() {
      return `${this.question.category} - ${this.question.difficulty}`
    },
    questionReady() {
      return this.$store.state.questionReady
    },
    hearts() {
      return this.$store.state.hearts
    }
  },
  
  methods: {
    getQuestion() {
      this.$store.dispatch('setQuestion')
    },
    checkAnswer(el) {
      this.triggerDisableButtons(true)
      let correct = this.question.correct_answer
      let button = el.currentTarget

      let answer = button.textContent
      answer === correct ? this.goodAnswer(button) : this.badAnswer(button)
      setTimeout(() => {
        if (this.hearts > 0) {
          //this.getQuestion()
        }

        this.getQuestion()
      }, 1500)
      this.detectEndGame()
    },
    goodAnswer(btn) {
      btn.classList.add('button--good')
      this.$store.getters.getHardmode === 'hard' ? this.$store.commit('ADD_HARD_POINTS') : this.$store.commit('ADD_POINTS')
      //this.$store.dispatch('fetchQuestion')
    },
    badAnswer(btn) {
      this.showCorrectAnswer()
      btn.classList.add('button--bad')
      this.$store.commit('REMOVE_HEART')
      //this.$store.dispatch('fetchQuestion')
    },
    detectEndGame() {
      
    },
    triggerDisableButtons(value) {
      let btns = document.querySelectorAll('.answer')
      btns.forEach(element => {
        element.disabled = value
      })
    },

    showCorrectAnswer() {}
  },
  mounted() {}
}
</script>

<style scoped>
.answer {
  background: none;
  border-color: #e4fde1;
  color: #e4fde1;
  font-weight: 600;
  margin-top: 1rem;
  white-space: normal;
}

.button--good {
  background: #e4fde1;
  color: #629460;
}
.button--bad {
  background: #c03221;
  border-color: #c03221;
}

.game-card {
  background: none;
  border: none;
  height: 100%;
}

.card-body {
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
}
.card-title {
  color: #e4fde1;
  font-size: 1.2rem;
  font-weight: 600;
}
</style>

