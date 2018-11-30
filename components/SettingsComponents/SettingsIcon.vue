<template>
  <img class='settings-icon' src='/sliders.svg' v-b-modal.modal1>
</template>

<script>
export default {
  name: 'SettingsIcon',
  methods: {
    settinsTrigger() {
      this.$store.commit('BIND_SETTINGS')
    }
  }
}
</script>


<style scoped>
.settings-icon {
  width: 2rem;
  height: 2rem;

  position: fixed;
  z-index: 10;
  bottom: 24px;
  right: 24px;
}
</style>

