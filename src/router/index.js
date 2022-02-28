import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Register2 from '../views/Register2.vue'
import login from '../views/login.vue'
import website from '../views/website.vue'
import website2 from '../views/website2.vue'
import company_search from '../views/company_search.vue'
import company_employer from '../views/company_employer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/Register2',
    name: 'Register2',
    component: Register2
  },
  {
    path: '/website',
    name: 'website',
    component: website
  },
  {
    path: '/website2',
    name: 'website2',
    component: website2
  },
  {
    path: '/company_search',
    name: 'company_search',
    component: company_search
  },
  {
    path: '/company_employer',
    name: 'company_employer',
    component: company_employer
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
