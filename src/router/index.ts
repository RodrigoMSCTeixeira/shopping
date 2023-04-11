import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
