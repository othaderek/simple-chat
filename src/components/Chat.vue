<template>
  <div class="chat md-layout md-alignment-center-center">
      <div class="md-layout-item md-size-80">
          <md-app>
            <md-app-toolbar class="md-primary">
                <span class="md-title chat-title">Chat</span>
            </md-app-toolbar>
          </md-app>
      <Messages />
      </div>
  </div>
</template>

<script>
import Messages from './Messages.vue';

export default {
  name: 'Chat',
  components: {
    Messages,
  },
};
</script>

<style lang="scss" scoped>

.md-app {
    max-height: 400px;
    border: 1px solid rgba(#000, .12);
}
</style>
