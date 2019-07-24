import { Auth } from 'aws-amplify'

import MessageService from '@/services/messageServices'

const UserService = {
  signIn: async function(user) {
    const username = user.email
    const password = user.password
    let userCognito = null
    try {
      userCognito = await Auth.signIn({
        username,
        password,
      })
    } catch (error) {
      console.log(error)
      MessageService.dispatchError(
        error,
        'core/SHOW_TOASTER_MESSAGE',
        'errors.'
      )
    }
    return userCognito
  },
  signOut: async function() {
    try {
      const response = await Auth.signOut()
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  forgotPassword: async function(userName) {
    try {
      const response = await Auth.forgotPassword(userName)
      debugger
      return response
    } catch (error) {
      console.log(error)
      MessageService.dispatchError(
        error,
        'core/SHOW_TOASTER_MESSAGE',
        'errors.'
      )
    }
  },
  resetPassword: async function(userName, code, newPassword) {
    try {
      await Auth.forgotPasswordSubmit(userName, code, newPassword)
      return true
    } catch (error) {
      MessageService.dispatchError(
        error,
        'core/SHOW_TOASTER_MESSAGE',
        'errors.'
      )
    }
  },
  getCurrentAuthenticatedUser: async function() {
    try {
      const user = await Auth.currentAuthenticatedUser()
      return user
    } catch (error) {
      console.log(error)
      return null
    }
  },
}

export default UserService
