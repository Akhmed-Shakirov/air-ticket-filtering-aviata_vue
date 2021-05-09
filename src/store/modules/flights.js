import axios from 'axios'

const state = {
  flights: [],
  selected: 'Все',
  categories: []
}
const getters = {
  flights(state) {
    return state.flights
  },
  selected(state) {
    return state.selected
  },
  categories(state) {
    return state.categories
  }
}
const actions = {
  get_flights({commit}) {
    return axios.get('http://localhost:3000/flights')
    .then((flights) => {
      commit('set_flights', flights.data)
    })
  }
}
const mutations = {
  set_flights: (state, flights) => {
    state.flights = flights
  },
  set_selected: (state, dest) => {
    state.selected = dest
  },
  set_categories: (state, category) => {
    state.categories = category
  },
  set_categories_null: (state) => {
    state.categories = []
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}