import * as auth from '@/store/modules/auth/types'
import UserService from '@/api/cognito/userService'
import MessageService from '@/services/messageServices'

export default {
  async [auth.LOGIN]({ commit }, user) {
    const userCognito = await UserService.signIn(user)
    if (userCognito !== null && typeof userCognito !== 'undefined') {
      commit(auth.SETCOGNITOUSER, userCognito)
      commit(
        auth.SETCOGNITOTOKEN,
        userCognito.signInUserSession.accessToken.jwtToken
      )
      commit(auth.LOGIN, user)
      MessageService.dispatchSuccess(
        'UserLogin',
        'core/SHOW_TOASTER_MESSAGE',
        'success.'
      )
    }
    return userCognito
  },
  async [auth.LOGOUT]({ commit }) {
    try {
      const response = await UserService.signOut()
      console.log(response)
      commit(auth.LOGOUT)
    } catch (error) {
      console.log(error)
    }
  },
  [auth.SETCOGNITOUSER]({ commit }, cognitoUser) {
    commit(auth.SETCOGNITOUSER, cognitoUser)
  },
  async [auth.FORGOT_PASSWORD]({ commit }, email) {
    try {
      const response = await UserService.forgotPassword(email)
      if (response !== null && typeof response !== 'undefined') {
        commit(auth.RESET_PASSWORD_OK, true)
        MessageService.dispatchInfo(
          'CheckEmailCode',
          'core/SHOW_TOASTER_MESSAGE',
          'info.'
        )
      }
    } catch (error) {
      console.log(error)
      commit(auth.RESET_PASSWORD_OK, false)
    }
  },
  async [auth.RESET_PASSWORD]({ commit }, user) {
    try {
      const response = await UserService.resetPassword(
        user.email,
        user.code,
        user.newPassword
      )
      if (response === true) {
        commit(auth.RESET_PASSWORD_OK, false)
        MessageService.dispatchSuccess(
          'ResetPassword',
          'core/SHOW_TOASTER_MESSAGE',
          'success.'
        )
        return true
      }
    } catch (error) {
      console.log(error)
      commit(auth.RESET_PASSWORD_OK, false)
      return false
    }
  },
  [auth.SETLOGGEDIN]({ commit }, loggedIn) {
    commit(auth.SETLOGGEDIN, loggedIn)
  },
  [auth.SETLOGGEDOUT]({ commit }, loggedOut) {
    commit(auth.SETLOGGEDOUT, loggedOut)
  },
}
