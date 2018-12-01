const pkg = require('./package')



module.exports = {
  mode: 'universal',
  /*router: {
    base: '/quiz-app-nuxt/'
  },*/
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        href: "https://fonts.googleapis.com/css?family=Raleway:400,500,700&amp;subset=latin-ext",
        rel: "stylesheet"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [,
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    [
      'nuxt-fire',
      {
        config: {
          options: {
            useOnly: 'realtimeDb'
          },
          development: {
            apiKey: "AIzaSyCBNZ3hKvC9qMH_tLfmI2vLlArSsBU_jSA",
            authDomain: "quiz-app-v2-fe50b.firebaseapp.com",
            databaseURL: "https://quiz-app-v2-fe50b.firebaseio.com",
            projectId: "quiz-app-v2-fe50b",
            storageBucket: "quiz-app-v2-fe50b.appspot.com",
            messagingSenderId: "840502410830"
          },
          production: {
            apiKey: "AIzaSyCBNZ3hKvC9qMH_tLfmI2vLlArSsBU_jSA",
            authDomain: "quiz-app-v2-fe50b.firebaseapp.com",
            databaseURL: "https://quiz-app-v2-fe50b.firebaseio.com",
            projectId: "quiz-app-v2-fe50b",
            storageBucket: "quiz-app-v2-fe50b.appspot.com",
            messagingSenderId: "840502410830"

          }
        }
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {

    }
  }
}
