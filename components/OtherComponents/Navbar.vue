<template>
  <b-navbar toggleable="md" type="dark" variant="transparent" fixed="top" class="nav">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#" class="logo font-weight-bold">Quiz app</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse" class="menu-container">
      <b-navbar-nav fill>
        <b-nav-item
          v-for="item in categories"
          :key="item.id"
          :data-category-id="item.id"
          @click="setCategory"
        >{{item.name}}</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navigation',
  computed: {
    categories() {
      return categories
    }
  },
  methods: {
    setCategory(el) {
      let categoryId = el.currentTarget.dataset.categoryId
      this.$store.commit('SET_CATEGORY', categoryId)
      if (this.$route.path !== '/Game') {
        this.$router.push('/Game')
      }
      this.$store.dispatch('setQuestion')
      this.$store.commit('RESTART_GAME')
    },
    fetchQuestion() {
      this.$store.dispatch('setQuestion')
    }
  }
}

const categories = [
  {
    id: 9,
    name: 'General Knowledge'
  },
  {
    id: 10,
    name: 'Entertainment: Books'
  },
  {
    id: 11,
    name: 'Entertainment: Film'
  },
  {
    id: 12,
    name: 'Entertainment: Music'
  },
  {
    id: 13,
    name: 'Entertainment: Musicals & Theatres'
  },
  {
    id: 14,
    name: 'Entertainment: Television'
  },
  {
    id: 15,
    name: 'Entertainment: Video Games'
  },
  {
    id: 16,
    name: 'Entertainment: Board Games'
  },
  {
    id: 17,
    name: 'Science & Nature'
  },
  {
    id: 18,
    name: 'Science: Computers'
  },
  {
    id: 19,
    name: 'Science: Mathematics'
  },
  {
    id: 20,
    name: 'Mythology'
  },
  {
    id: 21,
    name: 'Sports'
  },
  {
    id: 22,
    name: 'Geography'
  },
  {
    id: 23,
    name: 'History'
  },
  {
    id: 24,
    name: 'Politics'
  },
  {
    id: 25,
    name: 'Art'
  },
  {
    id: 26,
    name: 'Celebrities'
  },
  {
    id: 27,
    name: 'Animals'
  },
  {
    id: 28,
    name: 'Vehicles'
  },
  {
    id: 29,
    name: 'Entertainment: Comics'
  },
  {
    id: 30,
    name: 'Science: Gadgets'
  },
  {
    id: 31,
    name: 'Entertainment: Japanese Anime & Manga'
  },
  {
    id: 32,
    name: 'Entertainment: Cartoon & Animations'
  }
]
</script>


<style scoped>
.nav {
  overflow-y: scroll;
  position: absolute;
  top: 0;
  z-index: 11;
  padding: 0;
}

.navbar-collapse {
  background: #629460;
}

.logo {
  font-weight: 600;
}

.navbar-dark .navbar-toggler {
  color: #fff;
}
</style>
