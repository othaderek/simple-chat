<template>
  <div class="md-layout-item md-alignment-center-center">
      <md-content class="md-size-80 chat-box md-scrollbar">
        <md-list class="md-double-line message">
          <md-list-item
          v-for="message in messages"
          v-bind:key="message.key"
          v-bind:body="message.body">{{message.body}}</md-list-item>
        </md-list>
      </md-content>
      <md-field>
        <label>Enter Message</label>
        <md-input v-model="newMessage"
         v-on:keyup.enter="addToMessages($event)"
         value="newMessage"></md-input>
      </md-field>
  </div>
</template>

<script>
import Message from './Message.vue';

export default {
  name: 'Messages',
  components: [
    Message,
  ],
  mounted() {
    this.$socket.on('message', (msg) => {
      this.sockets.message(msg);
    });
  },
  sockets: {
    message(msg) {
      console.log(msg);
      this.messages = [...this.messages, msg];
    },
  },
  methods: {
    addToMessages() {
      const msgObj = { body: this.newMessage };
      this.$socket.emit('message', msgObj);
      this.clearInput();
    },
    clearInput() {
      this.newMessage = '';
    },
  },
  data() {
    return {
      newMessage: '',
      messages: [
        {
          id: 1,
          body: 'Hello',
          user: 'othaderek',
        },
        {
          id: 2,
          body: 'Hi?',
          user: 'othaderek',
        },
        {
          id: 3,
          body: 'Anybody else in here?',
          user: 'othaderek',
        },
      ],
    };
  },
};
</script>

<style>
.chat-box{
  justify-content: left;
}
.md-content{
  height: 600px;
  overflow: auto;
}
.md-list-item{
  height: 50px;
}
</style>
