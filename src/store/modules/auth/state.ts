export default {
  email: '',
  logged: false,
  cognitoUser: null,
  cognitoToken: localStorage.getItem('user-token') || null,
  resetPassword: false,
}
