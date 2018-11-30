import {
  CompositeDisposable
} from "rx";

export default {
  fetchQuestion({
    getters,
    state,
    commit
  }) {
    commit('SET_QUESTION_READY', false)
    return new Promise((resolve, reject) => {
      fetch(
          `https://opentdb.com/api.php?amount=2&category=${
          state.category
        }&difficulty=${getters.getHardmode}`
        )
        .then(v => {

          return resolve(v)
        })
        .catch(error => {
          return reject(error)
        })
    })
  },
  setQuestion({
    dispatch,
    commit
  }) {
    dispatch('fetchQuestion')
      .then(v => v.json())
      .then(v => commit('SET_QUESTION', v.results[0]))
      .then(v => commit('SET_ANSWERS', v))
      .then(v => commit('SET_QUESTION_READY', true))
  },
  async writeToFirestore({
    state
  }) {
    const highestRef = this.$fireDb.ref('highscores')
    try {
      this
      await highestRef.set(state.highscores)
    } catch (e) {
      alert(e)
      return
    }
    
  },
  async readFromFirestore({
    commit
  }) {
    const highscoresRef = this.$fireDb.ref('highscores')
    try {
      const snapshot = await highscoresRef.once('value')
      commit('SET_HIGHSCORE', snapshot.val())
      commit('SORT_HIGHSCORES')
    } catch (e) {
      alert(e)
      return
    }
  }
}
