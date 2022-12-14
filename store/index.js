export const state = () => ({
	settings: null,
	mainTheme: 'black',
})

export const mutations = {
	SET_settings(state, settings) {
		state.settings = settings
	},
	SET_mainTheme(state, mainTheme) {
		state.mainTheme = mainTheme
	},
}
export const actions = {
	async nuxtServerInit({ commit }) {
		const { result } = await this.$axios.$get('https://q5syy0z1.api.sanity.io/v2021-03-25/data/query/production?query=*%5B_type%3D%3D%22settings%22%5D%7B...%2C%22logo%22%3Alogo.asset-%3Eurl%2C%22circleLogo%22%3AcircleLogo.asset-%3Eurl%7D')
		commit('SET_settings', result)
	},
}
