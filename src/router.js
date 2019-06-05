import Vue from 'vue'
import Router from 'vue-router'
import UserService from '@/api/cognito/userService'
// import store from '@/store'

async function requireAuth(to, from, next) {
  const userAuth = await UserService.getCurrentAuthenticatedUser()
  if (userAuth === null) {
    //store.dispatch(authTypes.SETLOGGEDIN, false)
    next({
      path: '/login',
      query: { redirect: to.fullPath },
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
    // {
    //   path: '/auth',
    //   beforeEnter() {
    //     var currUrl = window.location.href
    //     console.log(currUrl)
    //     cognito.auth.parseCognitoWebResponse(currUrl)
    //   },
    // },
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

/*outer.beforeEach((to, from, next) => {
  if (to.fullPath === '/' && store.getters['auth/GET_LOGIN'] === false) {
    next('/login')
  }
  next()
})*/

export default router
