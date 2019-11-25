import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ListProducto from '@/components/ListProducto.vue' 
import CarritoCompras from '@/components/CarritoCompras.vue' //importamos componente producto
import Login from '@/components/Login.vue'
import CreateAccount from '@/components/CreateAccount.vue' 



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login  
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: CreateAccount  
  },
  {
    path: '/ListProducto',
    name: 'ListProducto',
    component: ListProducto
  },
  {
    path: '/CarritoCompras',
    name: 'CarritoCompras',
    component: CarritoCompras  // ya importado agregamos
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
