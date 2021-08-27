const getters = {
  token: (state) => state.user.token,
  themeType: (state) => state.theme.themeType,
  themeColor: (state) => state.theme.themes[state.theme.themeType].color,
}
export default getters
