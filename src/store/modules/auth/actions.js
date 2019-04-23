import * as auth from './types'

export default {
  [auth.LOGIN]({ commit }, user) {
    commit(auth.LOGIN, user)
  },
  [auth.LOGOUT]({ commit }) {
    commit(auth.LOGOUT)
  },
}
