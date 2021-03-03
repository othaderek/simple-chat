import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueMaterial);
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000',
}));

new Vue({
  render: (h) => h(App),
}).$mount('#app');
