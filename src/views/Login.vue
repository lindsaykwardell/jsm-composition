<template>
  <div class="flex flex-col items-center">
    <img alt="Vue logo" src="../assets/logo.png" class="w-48">
    <h1 class="text-2xl border-b border-gray-400 mb-4">Vue Composition API</h1>
    <form @submit.prevent="loginHandler" class="flex flex-col w-64 m-auto">
      <label for="username">Username</label>
      <input type="text" v-model="username" id="username" class="p-1 shadow">
      <label for="password">Password</label>
      <input type="password" v-model="password" id="password" class="p-1 shadow">
      <button type="submit" class="bg-green-400 border border-green-600 my-4 w-48 m-auto text-black hover:bg-green-300 hover:border-green-500 hover:shadow transition duration-50">Login</button>
    </form>
  </div>
</template>

<script>
import { defineComponent, reactive, onMounted, toRefs } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Login',
  setup() {
    const state = useStore()
    const loginState = reactive({
      username: '',
      password: ''
    })

    function loginHandler() {
      state.dispatch('login', loginState)
    }

    onMounted(() => {
      if (localStorage.getItem('username')) {
        loginState.username = localStorage.getItem('username')
        loginHandler()
      }
    })

    return {
      ...toRefs(loginState),
      loginHandler
    }
  }
})
</script>
