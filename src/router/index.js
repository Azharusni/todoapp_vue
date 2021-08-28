import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/Register.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'
import Boards from '../components/Boards.vue'
import SingleBoard from '../components/SingleBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  
  {
    path: '/',
    name: 'Boards',
    component: Boards
  },

  {
    path: '/boards/:id',
    name: 'SingleBoard',
    component: SingleBoard
  }

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
