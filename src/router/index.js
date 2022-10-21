import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import BuyView from '../views/BuyView.vue'
import SellView from '../views/SellView.vue'
import AuthView from '../views/AuthView.vue'
import SignView from '../views/SignView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: ProductView
  },
  {
    path: '/buy',
    name: 'buy',
    component: BuyView
  },
  {
    path: '/sell',
    name: 'sell',
    component: SellView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/sign',
    name: 'sign',
    component: SignView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
