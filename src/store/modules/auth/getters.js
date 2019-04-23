export const GET_USER = 'GET_USER'
export const GET_LOGIN = 'GET_LOGIN'

export default {
  [GET_USER]: state => state.email,
  [GET_LOGIN]: state => state.login,
}
