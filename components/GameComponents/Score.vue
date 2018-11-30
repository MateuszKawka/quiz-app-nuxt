<template>
<div class='score-container'>
    <p class='text-light h3 score'>{{score}} </p>
</div>
</template>
<script>
export default {
  name: 'Score',
  computed: {
    score() {
      return this.$store.state.points
    }
  }
}
</script>

<style scoped>
.score-container {
  width: 100%;
  margin-top: 20%;
}

.score {
  font-weight: 700;
  text-align: right;
}
</style>
