import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from 'vue-cookies'
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
Vue.use(VueCookies);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
