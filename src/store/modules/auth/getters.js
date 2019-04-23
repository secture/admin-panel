export const GET_EMAIL = 'GET_USER'
export const GET_LOGIN = 'GET_LOGIN'

export default {
  [GET_EMAIL]: state => state.email,
  [GET_LOGIN]: state => state.login,
}
