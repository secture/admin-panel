const CognitoConfig = {
  Auth: {
    region: process.env.VUE_APP_COGNITO_REGION,
    userPoolId: process.env.VUE_APP_COGNITO_USERPOOL_ID,
    userPoolWebClientId: process.env.VUE_APP_COGNITO_CLIENT_ID,
  },
}

export default CognitoConfig
