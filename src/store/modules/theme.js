const state = {
  themeType: 'blue',
  themes: {
    blue: {
      color: '#2d8cf0',
    },
    red: {
      color: '#F26755',
    },
    green: {
      color: '#1AAD19',
    },
  },
}

const mutations = {
  SET_THEME_TYPE: (state, value) => {
    state.themeType = value
  },
}

const actions = {
  setThemeType({ commit }, value) {
    window.document.documentElement.setAttribute('data-theme', value)
    commit('SET_THEME_TYPE', value)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
