import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      meta: { layout: 'home-layout' },
      component: require('@/components/HomeContent.vue').default,
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: 'login-layout' },
      component: () => import('@/components/LoginForm.vue'),
    },
  ],
})
