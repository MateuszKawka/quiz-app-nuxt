<template>
  <div>
    <!-- Modal Component -->
    <b-modal id="modal1" title="Settings" hide-footer>
      <b-form-group label="Hard mode">
        <b-form-radio-group
          id="radios1"
          v-model="settings.hardmode"
          :options="settings.options"
          name="radioOpenions"
        ></b-form-radio-group>
      </b-form-group>
      <SettingsHighscores />
      <b-btn size="sm" class="float-right" variant="primary" @click="close">Close</b-btn>
      <b-btn size="sm" class="float-right" variant="primary" @click="setSettings">Save</b-btn>
    </b-modal>
  </div>
</template>

<script>
import SettingsHighscores from '~/components/SettingsComponents/ShowHighscores.vue'

export default {
  name: 'Settings',
  components: {
    SettingsHighscores
  },  
  computed: {
    showSettings() {
      return this.$store.state.showSettings
    }
  },
  data() {
    return {
      settings: {
        hardmode: false,
        options: [{ text: 'ON', value: true }, { text: 'Off', value: false }],
      }
    }
  },
  methods: {
    setSettings() {
      this.$store.commit('SET_SETTINGS', this.settings)
      this.close()
    },
    close() {
      this.$root.$emit('bv::hide::modal', 'modal1')
    }
  }
}
</script>

