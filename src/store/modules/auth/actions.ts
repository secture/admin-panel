import router from '@/router'
import store from '@/store'
import * as types from '@/store/modules/auth/types'
import UserService from '@/api/cognito/userService'
import MessageService from '@/services/messageServices'

import { ActionTree } from 'vuex'
import { Auth, User, UserResetPassword } from '@/models/auth'
import { RootState } from '@/models/rootState'

export const actions: ActionTree<Auth, RootState> = {
  async [types.LOGIN]({ commit }: any, user: User): Promise<any> {
    let userCognito: any = null
    userCognito = await UserService.signIn(user)
    if (userCognito !== null && typeof userCognito !== 'undefined') {
      commit(types.LOGIN, userCognito)
      localStorage.setItem(
        'user-token',
        userCognito.signInUserSession.accessToken.jwtToken
      )
      MessageService.dispatchSuccess(
        'UserLogin',
        'core/SHOW_TOASTER_MESSAGE',
        'success.'
      )
    }
    return userCognito
  },
  async [types.LOGOUT]({ commit }: any): Promise<any> {
    const response = await UserService.signOut()
    commit(types.SET_USER_LOGGED, false)
    localStorage.removeItem('user-token')
    return response
  },
  async [types.GET_AUTHENTICATED_USER]({ commit }: any): Promise<any> {
    const userAuthenticated = await UserService.getCurrentAuthenticatedUser()
    if (
      typeof userAuthenticated !== 'undefined' ||
      userAuthenticated !== null
    ) {
      commit(types.LOGIN, userAuthenticated)
    } else {
      store.dispatch(types.LOGOUT).then(() => {
        router.push({ path: '/login' })
      })
    }
    return userAuthenticated
  },
  async [types.FORGOT_PASSWORD]({ commit }: any, email: string): Promise<void> {
    try {
      const response = await UserService.forgotPassword(email)
      if (response !== null && typeof response !== 'undefined') {
        commit(types.RESET_PASSWORD_OK, true)
        MessageService.dispatchInfo(
          'CheckEmailCode',
          'core/SHOW_TOASTER_MESSAGE',
          'info.'
        )
      }
    } catch (error) {
      commit(types.RESET_PASSWORD_OK, false)
    }
  },
  async [types.RESET_PASSWORD](
    { commit }: any,
    user: UserResetPassword
  ): Promise<boolean> {
    try {
      const response = await UserService.resetPassword(
        user.email,
        user.code,
        user.newPassword
      )
      if (response === true) {
        commit(types.RESET_PASSWORD_OK, false)
        MessageService.dispatchSuccess(
          'ResetPassword',
          'core/SHOW_TOASTER_MESSAGE',
          'success.'
        )
        return true
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      commit(types.RESET_PASSWORD_OK, false)
      return false
    }
  },
}
