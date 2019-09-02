import axios from 'axios'
import store from '@/store/index'

let config = {
  baseURL: process.env.VUE_APP_API_KEY,
}

const httpClient = axios.create(config)

const authInterceptor = config => {
  config.headers = {
    Authorization: `Bearer ${store.getters['auth/GET_COGNITO_TOKEN']}`,
    'content-type': 'application/json',
  }
  return config
}

httpClient.interceptors.request.use(authInterceptor)

export { httpClient }
