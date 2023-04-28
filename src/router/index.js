import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import adduser from '../views/adduser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/edituser/:id',
    name: 'edituser',
    component: adduser
  },
  {
    path: '/adduser',
    name: 'adduser',
    component: adduser
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
