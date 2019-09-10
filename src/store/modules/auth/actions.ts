import * as auth from '@/store/modules/auth/types'
import UserService from '@/api/cognito/userService'
import MessageService from '@/services/messageServices'

export default {
  async [auth.LOGIN]({ commit }: any, user: any) {
    let userCognito: any = null
    userCognito = await UserService.signIn(user)
    if (userCognito !== null && typeof userCognito !== 'undefined') {
      commit(auth.LOGIN, userCognito)
      commit(
        auth.SETCOGNITOTOKEN,
        userCognito.signInUserSession.accessToken.jwtToken
      )
      commit(auth.SETUSERLOGGED, true)
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
  async [auth.LOGOUT]({ commit }: any) {
    const response = await UserService.signOut()
    commit(auth.SETUSERLOGGED, false)
    localStorage.removeItem('user-token')
    return response
  },
  async [auth.GETAUTHENTICATEDUSER]({ commit }: any) {
    const userAuthenticated = await UserService.getCurrentAuthenticatedUser()
    commit(auth.LOGIN, userAuthenticated)
    commit(
      auth.SETCOGNITOTOKEN,
      userAuthenticated.signInUserSession.accessToken.jwtToken
    )
    commit(auth.SETUSERLOGGED, true)
    localStorage.setItem(
      'user-token',
      userAuthenticated.signInUserSession.accessToken.jwtToken
    )
    return userAuthenticated
  },
  async [auth.FORGOT_PASSWORD]({ commit }: any, email: any) {
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
  async [auth.RESET_PASSWORD]({ commit }: any, user: any) {
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
      } else {
        return false
      }
    } catch (error) {
      console.log(error)
      commit(auth.RESET_PASSWORD_OK, false)
      return false
    }
  },
}
