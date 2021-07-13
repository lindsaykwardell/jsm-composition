<template>
  <div id="wrapper">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

export default defineComponent({
  name: 'Layout',
  computed: mapGetters([
    'isLoggedIn'
  ]),
  watch: {
    isLoggedIn () {
      if (this.isLoggedIn) {
        this.$router.push('/')
      } else {
        this.$router.push('/login')
      }
    }
  },
})
</script>

<style lang="postcss" scoped>
#wrapper {
  @apply bg-gray-100;
  width: 600px;
  margin-top: 50px;
}
</style>