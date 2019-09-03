export const GET_EMAIL = 'GET_USER'
export const GET_USER_LOGGED = 'GET_USER_LOGGED'

export const GET_COGNITO_USER = 'GET_COGNITO_USER'
export const GET_COGNITO_TOKEN = 'GET_COGNITO_TOKEN'
export const GET_RESET_PASSWORD = 'GET_RESET_PASSWORD'

export default {
  [GET_EMAIL]: state => state.email,
  [GET_USER_LOGGED]: state => state.logged,
  [GET_COGNITO_USER]: state => state.cognitoUser,
  [GET_COGNITO_TOKEN]: state => state.cognitoToken,
  [GET_RESET_PASSWORD]: state => state.resetPassword,
}
