export const GET_EMAIL = 'GET_USER'
export const GET_LOGIN = 'GET_LOGIN'

export const GET_COGNITO_INFO = 'GET_COGNITO_INFO'
export const GET_RESET_PASSWORD = 'GET_RESET_PASSWORD'

export default {
  [GET_EMAIL]: state => state.email,
  [GET_LOGIN]: state => state.loggedIn,
  [GET_COGNITO_INFO]: state => state.cognitoInfo,
  [GET_RESET_PASSWORD]: state => state.resetPassword,
}
