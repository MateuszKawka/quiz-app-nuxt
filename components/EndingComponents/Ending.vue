<template>
  <transition name="slide-left-to-right" mode="in-out">
    <b-container fluid class="min-100vh ending-container" v-if="items.length > 0">
      <div v-if="Object.keys(result).length > 0">
        <b-row class="info">
          <b-col>
            <p class="h4 text-white points">Points: {{score}}</p>
          </b-col>
          <b-col>
            <p class="h4 text-white">Time: {{time}}s</p>
          </b-col>
        </b-row>

        <AddRekord v-if="validation"/>
      </div>
      <Table/>
      <b-button variant="light" tag="nuxt-link" to="/game" @click.native="restartGame">restart</b-button>
    </b-container>
  </transition>
</template>

<script>
import Table from '~/components/EndingComponents/Table.vue'
import AddRekord from '~/components/EndingComponents/AddRekord.vue'
export default {
  components: {
    Table,
    AddRekord
  },
  data() {
    return {
      result: {
        name: '',
        score: Number,
        time: 0
      }
    }
  },
  computed: {
    items() {
      return this.$store.state.highscores
    },
    score() {
      return this.$store.state.points
    },
    time() {
      return this.$store.state.time
    },
    validation() {
      return this.$store.state.validation
    }
  },
  methods: {
    restartGame() {
      this.$store.commit('RESTART_GAME')
    },
    rankingValidation() {
      let length = this.items.length - 1
      let lastHighscoreScore = this.items[length].score
      let lastHighscoresTime = this.items[length].time

      if (length >= 9) {
        if (lastHighscoreScore > this.score) {
          this.$store.commit('SET_VALIDATIONS', false)
          return
        } else if (lastHighscoreScore < this.score) {
          this.$store.commit('SET_VALIDATIONS', true)
          return
        } else {
          if (lastHighscoresTime > this.time) {
            this.$store.commit('SET_VALIDATIONS', true)
          } else {
            this.$store.commit('SET_VALIDATIONS', false)
          }
        }
      }
      console.log(this.validation)
    }
  },
  mounted() {
    this.$store
      .dispatch('readFromFirestore')
      .then(v => this.rankingValidation())
  }
}
</script>

<style>
.ending-container {
  display: flex;
  flex-flow: column wrap;
}

.ending-container__name-input {
  margin-top: 0%;
}

.ending-container__button {
  margin-top: 5%;
}

.ending-container__table {
  margin-top: 10%;
}

.info {
  margin-top: 15%;
}
</style>
