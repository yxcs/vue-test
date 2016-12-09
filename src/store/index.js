import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import lists from './modules/lists.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  	count: 0
  },
  mutations,
  actions,
  getters: {

  },
  modules: {
  	lists
  }
})

export default { store }