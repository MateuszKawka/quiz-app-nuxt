<template>
  <b-container fluid class="min-100 game-container">
    <b-row>
      <b-col cols='6'>
        <Hearts/>
        
      </b-col>
      <b-col cols='6'>
<Score/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        
          <Game/>
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Game from '~/components/GameComponents/Game.vue'
import Hearts from '~/components/GameComponents/Hearts.vue'
import Score from '~/components/GameComponents/Score.vue'

export default {
  name: 'GamePage',
  components: {
    Game,
    Hearts,
    Score
  },
  mounted() {
    this.$store.commit('SET_START_TIME')
  }
}
</script>

<style scoped>
.game-container {
  padding-top: 10%;
}
</style>

