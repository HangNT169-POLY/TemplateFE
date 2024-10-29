import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './page/HomePage.vue'
import SecondPage from './page/SecondPage.vue'
import PageView from './page/PageView.vue'

const routes = [
  {
    path: '/a',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: PageView,
  },
  {
    path: '/page-view/:id',
    name: 'PageView',
    component: SecondPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // Sửa `routers` thành `routes`
})

export default router
