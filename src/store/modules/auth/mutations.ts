import { MutationTree } from 'vuex'
import { Auth } from '@/models/auth'
import * as types from '@/store/modules/auth/types'

export const mutations: MutationTree<Auth> = {
  [types.LOGIN](state: any, cognitoUser: any) {
    state.cognitoUser = cognitoUser
    state.cognitoToken = cognitoUser.signInUserSession.accessToken.jwtToken
    state.email = cognitoUser.attributes.email
    state.logged = true
  },
  [types.LOGOUT](state: any) {
    state.cognitoUser = null
    state.cognitoToken = null
    state.email = ''
    state.logged = false
  },
  [types.SET_COGNITO_TOKEN](state: any, cognitoToken: string) {
    state.cognitoToken = cognitoToken
  },
  [types.SET_USER_LOGGED](state: any, logged: any) {
    state.logged = logged
  },
  [types.RESET_PASSWORD_OK](state: any, resetPassword: boolean) {
    state.resetPassword = resetPassword
  },
}
