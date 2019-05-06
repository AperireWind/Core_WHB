import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reg from './components/Reg.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
