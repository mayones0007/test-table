import { createStore } from 'vuex'
import { generateData } from "./dataGenerator"

export const store = createStore({
  state() {
    return {
      data: [],
      filteredData: [],
    }
  },
  actions: {
    getData() {
      const data = generateData()
      this.commit('setData', data)
      this.commit('setFilteredData', data)
    }
  },
  mutations: {
    setData(state, data) {
      state.data = data
    },
    setFilteredData(state, data) {
      state.filteredData = data
    },
    resetFilteredData(state) {
      state.filteredData = state.data
    },
  }
})