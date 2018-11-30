<template>
  <b-table
    striped
    hover
    :items="items"
    responsive="true"
    :small="true"
    dark='dark'
    class="ending-container__table"
    :class='`table-style`'
  ></b-table>
</template>

<script>
export default {
  computed: {
    items() {
      return this.$store.state.highscores
    }
  }
}
</script>


<style >


.table-dark {
  background: rgba(0,0,0,0);
  font-weight: 600;
  
}

.table-dark th, .table-dark td, .table-dark thead th {
  border-color: #fff;
}
</style>
