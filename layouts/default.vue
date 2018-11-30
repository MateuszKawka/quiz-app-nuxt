<template>
  <div>
    <Navbar/>
      <transition name='slide-left-to-right'>
      <nuxt/>
      </transition>
    <SettingsIcon />
    <Settings />
  </div>
</template>

<style>
</style>


<script>
import Navbar from '~/components/OtherComponents/Navbar.vue'
import SettingsIcon from '~/components/SettingsComponents/SettingsIcon.vue'
import Settings from '~/components/SettingsComponents/Settings.vue'

export default {
  components: {
    Navbar, SettingsIcon, Settings
  },
   transition: 'slide-left-to-right'
}
</script>

<style >
.navbar-dark .navbar-nav .nav-link{
  color: #fff;
  font-size: 1.3rem;
  font-weight: 500;
  padding: .5rem 2rem;
  text-transform: uppercase;
}

body {
  background: #629460;
  font-family: 'Raleway' !important;

}

.min-100vh {
  min-height: 100vh;
}



.slide-left-to-right-enter-active, .slide-left-to-right-leave-active {
  transition: all .5s
}
.slide-left-to-right-enter, .slide-left-to-right-leave-active {
  opacity: 0;
  transform: translateX(30%);
}

.slide-right-to-left-enter-active, .slide-right-to-left-leave-active {
  transition: all .5s
}
.slide-right-to-left-enter, .slide-right-to-left-leave-active {
  opacity: 0;
  transform: translateX(-30%);
}


.btn.disabled, .btn:disabled {
  opacity: 1;
}

.layout-enter-active, .layout-leave-active {
  transition: opacity 2s
}
.layout-enter, .layout-leave-active {
  opacity: 0
}
</style>
