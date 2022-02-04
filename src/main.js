import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import axios from 'axios';
import store from './store'

axios.defaults.baseURL = 'https://fakestoreapi.com';



Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')