const state = {
  token: '',
}

const mutations = {
  SET_TOKEN: (state, value) => {
    state.token = value
  },
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
