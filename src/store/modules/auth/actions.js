import * as auth from '@/store/modules/auth/types'
import UserService from '@/api/cognito/userService'

export default {
  async [auth.LOGIN]({ commit }, user) {
    try {
      const response = await UserService.signIn(user)
      commit(auth.LOGIN, user)
      return response
    } catch (error) {
      console.log(error)
    }
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
  [auth.SETCOGNITOINFO]({ commit }, cognitoInfo) {
    commit(auth.SETCOGNITOINFO, cognitoInfo)
  },
  async [auth.FORGOT_PASSWORD]({ commit }, email) {
    try {
      const response = await UserService.forgotPassword(email)
      if (response !== null) {
        commit(auth.RESET_PASSWORD_OK, true)
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
