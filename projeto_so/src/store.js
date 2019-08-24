import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memory: [{name: "Livre", length: 100}],
    lastPoint: 0
  },
  mutations: {
    changePoint(state, payload){
      console.log(payload)
      state.lastPoint = payload
    }
  },
  actions: {

  }
})
