<template>
  <b-container class='add-rekord'>
    <b-row align-v="center">
      <b-input
      v-model="result.name"
      @keyup.enter.native="addResult"
      placeholder="Your name"
      class="ending-container__name-input"
    ></b-input>

    </b-row>
   
    
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      result: {
        name: '',
        score: Number,
        time: 0
      },
      
    }
  },
  computed: {
    validation() {
      return this.$store.state.validation
    },
  },
  methods: {
    addResult() {
      this.result.score = this.$store.state.points
      this.result.time = this.$store.state.time
      this.$store.commit('SET_RESULT', this.result)
      this.$store.commit('ADD_HIGHSCORE', this.result)
      this.$store.dispatch('writeToFirestore')
    }
  }

}
</script>

<style>


.add-rekord {
  margin-top: 10%;
}

</style>
