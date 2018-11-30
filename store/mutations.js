import {
  platform
} from "os";

export default {
  SET_QUESTION: (state, payload) => (state.question = payload),
  SET_CATEGORY: (state, payload) => (state.category = payload),
  SET_ANSWERS: state => {
    let answers = [];
    answers.push(state.question.correct_answer, ...state.question.incorrect_answers)
    state.answers = answers.sort(() => Math.random() - 0.5)
  },
  REMOVE_HEART: state => state.hearts -= 1,
  ADD_POINTS: state => state.points += 5,
  ADD_HARD_POINTS: state => state.points += 10,
  RESTART_GAME: state => {
    state.hearts = 3;
    state.points = 0
  },
  SET_RESULT: (state, payload) => {
    console.log(payload)
    Object.assign(state.result, payload)
  },
  SET_HIGHSCORE: (state, payload) => state.highscores = payload,
  SET_QUESTION_READY: (state, payload) => state.questionReady = payload,
  ADD_HIGHSCORE: (state, payload) => {
    state.highscores.length > 9 ? state.highscores.splice(9,1, payload) : state.highscores.push(payload)},
  BIND_SETTINGS: state => state.showSettings = !state.showSettings,
  SET_SETTINGS: (state, payload) => state.settings = payload,
  SET_START_TIME: (state) => state.time = Date.now(),
  SET_END_TIME: (state) => state.time = Math.round((Date.now() - state.time) / 1000),
  SORT_HIGHSCORES: (state) => {
    return state.highscores.sort((previous, current) => {
      if (previous.score < current.score)
        return 1;
      if (previous.score > current.score)
        return -1;
      return 0;
    })
  },
  SET_VALIDATIONS: (state, payload) => state.validation = payload
}