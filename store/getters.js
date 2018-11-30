export default {
  sortedHighscores: (state) => {
    return state.highscores.sort((previous, current) => {
      if (previous.score < current.score)
        return 1;
      if (previous.score > current.score)
        return -1;
      return 0;
    })
  },
  getHardmode: state => state.settings.hardmode ? 'hard' : 'easy'
}
