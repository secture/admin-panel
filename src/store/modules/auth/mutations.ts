import * as auth from '@/store/modules/auth/types'

export default {
  [auth.LOGIN](state: any, cognitoUser: any) {
    state.cognitoUser = cognitoUser
    state.email = cognitoUser.attributes.email
    state.logged = true
  },
  [auth.LOGOUT](state: any) {
    state.email = ''
    state.logged = false
    state.cognitoUser = null
  },
  [auth.SETCOGNITOTOKEN](state: any, cognitoToken: any) {
    state.cognitoToken = cognitoToken
  },
  [auth.SETUSERLOGGED](state: any, logged: any) {
    state.logged = logged
  },
  [auth.RESET_PASSWORD_OK](state: any, resetPassword: any) {
    state.resetPassword = resetPassword
  },
}
