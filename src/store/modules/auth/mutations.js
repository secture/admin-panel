import * as auth from '@/store/modules/auth/types'

export default {
  [auth.LOGIN](state, cognitoUser) {
    state.cognitoUser = cognitoUser
    state.email = cognitoUser.attributes.email
    state.logged = true
  },
  [auth.LOGOUT](state) {
    state.email = ''
    state.logged = false
    state.cognitoUser = null
  },
  [auth.SETCOGNITOTOKEN](state, cognitoToken) {
    state.cognitoToken = cognitoToken
  },
  [auth.SETUSERLOGGED](state, logged) {
    state.logged = logged
  },
  [auth.RESET_PASSWORD_OK](state, resetPassword) {
    state.resetPassword = resetPassword
  },
}
