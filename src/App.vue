<template>
  <div id="wrapper">
    <router-view/>
  </div>
</template>

<style lang="postcss">
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#wrapper {
  @apply bg-gray-100;
  width: 600px;
  margin-top: 50px;
}
</style>
