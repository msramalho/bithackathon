import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import VueSession from 'vue-session'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
const instance = axios.create({
  baseURL: 'http://localhost:3000',
});

Vue.config.productionTip = false;
Vue.use(VueSession);
Vue.use(VueAxios, instance);
Vue.use(Argon);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

