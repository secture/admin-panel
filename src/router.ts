import Vue from 'vue'
import Router from 'vue-router'
import UserService from '@/api/cognito/userService'

async function requireAuth(to: any, from: any, next: any) {
  const userAuth = await UserService.getCurrentAuthenticatedUser()
  if (typeof userAuth === 'undefined' || userAuth === null) {
    next({
      path: '/login',
    })
  } else {
    next()
  }
}

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
      beforeEnter: requireAuth,
    },
    {
      path: '/login',
      meta: { layout: 'default-layout' },
      component: require('@/views/Login.vue').default,
    },
    {
      path: '/reset-password',
      meta: { layout: 'default-layout' },
      component: require('@/views/ResetPassword.vue').default,
    },
    {
      path: '/teams',
      meta: { layout: 'dashboard-layout' },
      component: require('@/views/teams/Teams.vue').default,
      beforeEnter: requireAuth,
    },
    {
      path: '/players',
      meta: { layout: 'dashboard-layout' },
      component: require('@/views/players/Players.vue').default,
      beforeEnter: requireAuth,
    },
    {
      path: '/logout',
      meta: { layout: 'dashboard-layout' },
      component: require('@/views/Home.vue').default,
    },
    /*{
      path: '/error',
      component: ErrorComponent,
    },*/
  ],
})

export default router
