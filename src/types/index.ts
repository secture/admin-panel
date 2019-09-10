export interface UserResetPassword {
  email: string
  newPassword: string
  code: string
}

export interface User {
  email: string
  password: string
}

export interface CognitoUser {}
