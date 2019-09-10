export const GET_EMAIL = 'GET_USER'
export const GET_USER_LOGGED = 'GET_USER_LOGGED'

export const GET_COGNITO_USER = 'GET_COGNITO_USER'
export const GET_COGNITO_TOKEN = 'GET_COGNITO_TOKEN'
export const GET_RESET_PASSWORD = 'GET_RESET_PASSWORD'

export default {
  [GET_EMAIL]: (state: any) => state.email,
  [GET_USER_LOGGED]: (state: any) => state.logged,
  [GET_COGNITO_USER]: (state: any) => state.cognitoUser,
  [GET_COGNITO_TOKEN]: (state: any) => state.cognitoToken,
  [GET_RESET_PASSWORD]: (state: any) => state.resetPassword,
}
