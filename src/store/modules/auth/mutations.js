import * as auth from './types'

export default {
  [auth.LOGIN](state, user) {
    state.email = user.email
    state.password = user.password
    state.login = true
    state.logout = false
  },
  [auth.LOGOUT](state) {
    state.email = ''
    state.password = ''
    state.login = false
    state.logout = true
  },
}
