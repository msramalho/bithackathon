import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import VueSession from 'vue-session'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
const localAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

const continenteAPI = axios.create({
  baseURL: 'https://api.sonae.pt',
  headers: {
    'apikey': '1tA7G25c4K4wUoR84hx7f0YA8LyIcDIk',
    'Content-Type': 'application/json'
  }
});

Vue.config.productionTip = false;
Vue.use(VueSession);

Vue.use(VueAxios, axios);
//Vue.use(VueAxios, localAPI);
//Vue.use(VueAxios, continenteAPI);

Vue.use(Argon);

Vue.prototype.$localAPI = localAPI;
Vue.prototype.$continenteAPI = continenteAPI;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");


