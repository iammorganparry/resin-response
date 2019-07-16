export const state = () => ({
  toggleImage: false
})

export const getters = {
  openImage: (state) => {
    return state.toggleImage
  }
}

export const mutations = {
  toggleImage: (state) => {
    state.toggleImage = !state.toggleImage
  }
}

export const actions = {
  toggleImage: ({ commit }) => {
    commit('toggleImage')
  }
}
