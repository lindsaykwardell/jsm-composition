import { createStore } from 'vuex'

export default createStore({
  state: {
    username: null,
    todos: []
  },
  getters: {
    getUsername: state => state.username,
    isLoggedIn: state => state.username !== null,
    getTodos: state => state.todos
  },
  mutations: {
    setUsername (state, username) {
      state.username = username
      localStorage.setItem('username', username || '')
    },
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    removeTodo (state, index) {
      state.todos.splice(index, 1)
    },
    toggleTodo (state, index) {
      state.todos[index].completed = !state.todos[index].completed
    }
  },
  actions: {
    login ({ commit }, { username }) {
      commit('setUsername', username)
    },
    logout ({ commit }) {
      commit('setUsername', null)
    },
    addTodo ({ commit }, task) {
      commit('addTodo', {
        id: Date.now(),
        text: task,
        completed: false
      })
    },
    removeTodo ({ commit }, index) {
      commit('removeTodo', index)
    },
    toggleTodo ({ commit }, index) {
      console.log("Toggling Todo")
      commit('toggleTodo', index)
    }
  }
})
