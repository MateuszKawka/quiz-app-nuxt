<template>
  <Ending/>
</template>

<script>
import Ending from '~/components/EndingComponents/Ending.vue'
export default {
  name: 'EndingPage',
  components: {
    Ending
  },
  computed: {},
  methods: {
    restartGame() {
      this.$store.commit('SET_RESULT')
      this.$store.commit('RESTART_GAME')
      this.$store.dispatch('writeToFirestore')
    }
  },
  mounted() {}
}
</script>
