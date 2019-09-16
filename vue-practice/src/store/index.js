import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: '',
    aTodos: [{id: 0, value: 'default'}]
  },
  actions: {
    onAddTodo (context, item) {
      if (item.value !== '') {
        context.commit('onAddTodo', item)
      } else {
        context.commit('onError', '添加失败')
      }
    },

    onDelTodo(context, index) {
      context.commit('onDelTodo', index)
    }
  },
  mutations: {
    onAddTodo (state, item) {
      state.aTodos.push(item)
    },
    onError(state, msg) {
      state.message = msg
    },
    onDelTodo(state, index) {
      state.aTodos.splice(index, 1)
    }
  },
  getters: {
    nCounts (state) {
      return state.aTodos.length
    },
    aTodos(state) {
      return state.aTodos
    }
  }
})

export default store
