import { Auth } from 'aws-amplify'

const UserService = {
  signIn: async function(user) {
    const username = user.email
    const password = user.password
    try {
      const userCognito = await Auth.signIn({
        username,
        password,
      })
      return userCognito
    } catch (error) {
      console.log(error)
    }
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
      return response
    } catch (error) {
      console.log(error)
      return null
    }
  },
  resetPassword: async function(userName, code, newPassword) {
    try {
      await Auth.forgotPasswordSubmit(userName, code, newPassword)
      return true
    } catch (error) {
      console.log(error)
      return null
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
