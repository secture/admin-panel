import * as auth from '@/store/modules/auth/types'

export default {
  [auth.LOGIN](state, user) {
    state.email = user.email
    state.password = user.password
    state.loggedIn = true
    state.logout = false
  },
  [auth.LOGOUT](state) {
    state.email = ''
    state.password = ''
    state.loggedIn = false
    state.logout = true
    state.cognitoInfo = null
  },
  [auth.SETCOGNITOINFO](state, cognitoInfo) {
    state.cognitoInfo = cognitoInfo
  },
  [auth.SETLOGGEDIN](state, loggedIn) {
    state.loggedIn = loggedIn
  },
  [auth.SETLOGGEDOUT](state, loggedOut) {
    state.loggedOut = loggedOut
  },
  [auth.RESET_PASSWORD_OK](state, resetPassword) {
    state.resetPassword = resetPassword
  },
}
