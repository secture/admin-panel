import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'dashboard-layout' },
      component: require('@/views/Home.vue').default,
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: 'default-layout' },
      component: () => import('@/views/Login.vue'),
    },
  ],
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/' && store.getters['auth/GET_LOGIN'] === false) {
    next('/login')
  }
  next()
})

export default router
