<template>
  <div id="wrapper">
    <slot />
  </div>
</template>

<script>
import { computed, defineComponent, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Layout',
  setup() {
    const store = useStore()
    const router = useRouter()

    const isLoggedIn = computed(() => store.getters.isLoggedIn);

    watch(isLoggedIn, (isLoggedIn) => {
      if (isLoggedIn) {
        router.push('/')
      } else {
        router.push('/login')
      }
    })

    // watchEffect(() => {
    //   if (store.getters.isLoggedIn) {
    //     router.push('/')
    //   } else {
    //     router.push('/login')
    //   }
    // })
  }
})
</script>

<style lang="postcss" scoped>
#wrapper {
  @apply bg-gray-100;
  width: 600px;
  margin-top: 50px;
}
</style>