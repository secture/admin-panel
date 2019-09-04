import axios from 'axios'
import store from '@/store/index'
import * as auth from '@/store/modules/auth/types'
import MessageService from '@/services/messageServices'

let config = {
  baseURL: process.env.VUE_APP_API_KEY,
}

const httpClient = axios.create(config)

const authInterceptor = config => {
  const token =
    store.getters['auth/GET_COGNITO_TOKEN'] === null
      ? localStorage.getItem('user-token')
      : store.getters['auth/GET_COGNITO_TOKEN']
  config.headers = {
    Authorization: `Bearer ${token}`,
    'content-type': 'application/json',
  }
  return config
}

const okInterceptor = response => {
  return response
}

const errorInterceptor = error => {
  if (error.request.status == 401) {
    const refreshToken =
      store.getters['auth/GET_COGNITO_USER'].signInUserSession.refreshToken
        .token
    if (refreshToken) {
      try {
        return httpClient({
          headers: {
            Authorization: `Bearer ${refreshToken}`,
            'content-type': 'application/json',
          },
          method: error.config.method,
          url: error.config.url,
          data: error.config.data,
        })
      } catch (error) {
        MessageService.dispatchError(
          error,
          'core/SHOW_TOASTER_MESSAGE',
          'errors.'
        )
        store.dispatch(auth.LOGOUT).then(() => {
          router.push({ path: '/login' })
        })
      }
    } else {
      store.dispatch(auth.LOGOUT).then(() => {
        router.push({ path: '/login' })
      })
    }
  }
}

httpClient.interceptors.request.use(authInterceptor)
httpClient.interceptors.response.use(okInterceptor, errorInterceptor)

export { httpClient }
