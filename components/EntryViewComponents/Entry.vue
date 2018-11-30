<template>
  <b-container>

  
   <h1 class='text-white entry-text h3'> Welcome in quiz app build in NuxtJS. For start play pick category from menu </h1>
  </b-container>
</template>


<script>
export default {
  name: 'EntryView',
  methods: {  
    s() {
      this.$store.state.dispatch("fetchQuestion")
    }
  },
  mounted() {
  
  }
}
</script>

<style scoped>
.entry-text {
  margin-top: 40%;
}
</style>

