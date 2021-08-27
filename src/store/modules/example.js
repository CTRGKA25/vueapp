const state = {
  example: '',
}

const mutations = {
  SET_EXAMPLE: (state, value) => {
    state.example = value
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
