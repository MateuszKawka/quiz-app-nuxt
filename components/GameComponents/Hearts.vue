<template>
<div class='hearts'>
  <transition-group name='slide-left-to-right'>
  <img src='/heart.svg' class='heart' v-for='(heart, index) in hearts' :key='index'>
  </transition-group>
</div>
  
</template>

<script>
export default {
  name: 'Hearts',
  computed: {
    hearts() {
      return this.$store.state.hearts
    }
  },
  watch: {
    hearts: function(v) {
      if(v === 0) {
        this.$store.commit('SET_END_TIME')
        this.detectEndGame()
        
      }
    }
  },
  methods: {
    detectEndGame() {
      console.log('GAME OVER')
      this.$router.push('/ending');
    }
  }
}
</script>

<style scoped>
.heart {
  width: 1.75rem;
  height: 1.75rem; 
}

.hearts {
 
  margin-top: 20%;
}
</style>

