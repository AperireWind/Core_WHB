import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Reg from './components/Reg.vue'
import Login from './components/Login.vue'
import Page from './components/Pagehot.vue'
import AddArticle from './components/AddArticle.vue'
import MyCenter from './components/MyCenter.vue'

Vue.use(Router)

export default new Router({
  //mode是为了去除‘#’
  mode: 'history',
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
    },
    {
      path: '/page/:name/:id',
      name: 'page',
      component: Page
    },
    {
      path: '/addArticle',
      name: 'addArticle',
      component: AddArticle
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: MyCenter
    }
  ]
})
