<template>
  <div id="app" class="md-layout">
    <Chat/>
  </div>
</template>

<script>
import Chat from './components/Chat.vue';

export default {
  name: 'App',
  components: {
    Chat,
  },
};
</script>

<style lang="scss">
html, body {
  overflow-x: hidden;
}
body {
  position: relative
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
