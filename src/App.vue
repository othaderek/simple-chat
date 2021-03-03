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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 30px;
}
</style>
