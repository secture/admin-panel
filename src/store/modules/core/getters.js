export const GET_TOASTER = 'GET_TOASTER'
export const GET_MESSAGE = 'GET_CODE_MESSAGE'

export default {
  [GET_TOASTER]: state => state.showToaster,
  [GET_MESSAGE]: state => state.message,
}
