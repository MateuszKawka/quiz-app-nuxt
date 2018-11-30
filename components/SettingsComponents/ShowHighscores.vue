<template>
  <button @click='goToEnding'>See highscores </button>
</template>


<script>
export default {
  name: 'ShowHighscores',
  methods: {
    goToEnding() {
      this.$router.push('/Ending')
    }
  }
}
</script>
