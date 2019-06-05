import * as actions from '@/store/modules/auth/types'
import UserService from '@/api/cognito/userService'

export default {
  async [actions.LOGIN]({ commit }, user) {
    try {
      const response = await UserService.signIn(user)
      commit(actions.LOGIN, user)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async [actions.LOGOUT]({ commit }) {
    try {
      const response = await UserService.signOut()
      console.log(response)
      commit(actions.LOGOUT)
    } catch (error) {
      console.log(error)
    }
  },
  [actions.SETCOGNITOINFO]({ commit }, cognitoInfo) {
    commit(actions.SETCOGNITOINFO, cognitoInfo)
  },
  async [actions.FORGOT_PASSWORD]({ commit }, email) {
    try {
      const response = await UserService.forgotPassword(email)
      if (response !== null) {
        commit(actions.RESET_PASSWORD_OK, true)
      }
    } catch (error) {
      console.log(error)
      commit(actions.RESET_PASSWORD_OK, false)
    }
  },
  async [actions.RESET_PASSWORD]({ commit }, user) {
    try {
      const response = await UserService.resetPassword(
        user.email,
        user.code,
        user.newPassword
      )
      if (response === true) {
        commit(actions.RESET_PASSWORD_OK, false)
        return true
      }
    } catch (error) {
      console.log(error)
      commit(actions.RESET_PASSWORD_OK, false)
      return false
    }
  },
  [actions.SETLOGGEDIN]({ commit }, loggedIn) {
    commit(actions.SETLOGGEDIN, loggedIn)
  },
  [actions.SETLOGGEDOUT]({ commit }, loggedOut) {
    commit(actions.SETLOGGEDOUT, loggedOut)
  },
}
