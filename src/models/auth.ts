export interface Auth {
  email: string
  logged: boolean
  cognitoUser: any
  cognitoToken: string
  resetPassword: boolean
}

export interface CognitoUser {}

export interface UserResetPassword {
  email: string
  newPassword: string
  code: string
}

export interface User {
  email: string
  password: string
}
