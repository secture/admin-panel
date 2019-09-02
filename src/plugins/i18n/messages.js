export const messages = {
  en: {
    form: {
      titleLogin: 'Login Form',
      titleResetPassword: 'Recover Password',
      email: 'Email',
      password: 'Password',
      submit: 'Submit',
      back: 'Back',
      forgot_password: 'I forgot the password',
      refresh: 'Refresh form',
      reset: 'Reset password',
      code: 'Verification code',
      rules: {
        required: 'Required',
        characters: 'Min 8 characters',
      },
    },
    actions: {
      close: 'Close',
    },
    flags: {
      es: '🇪🇸',
      en: '🇺🇸',
    },
    errors: {
      UserNotFoundException: 'User does not exist',
      NotAuthorizedException: 'Incorrect username or password.',
      UserNotFoundException: 'Username/client id combination not found.',
      CodeMissmatchException: 'User code verification is not correct',
      InvalidPasswordException:
        'Password does not conform to policy: Password must have symbol characters',
      GetTeamsMaster: 'An error has occurred when retrieve teams',
    },
    success: {
      UserLogin: 'Success user logged',
      ResetPassword: 'Success changed password',
    },
    info: {
      CheckEmailCode:
        'You have been sent a code via email to reset your password',
    },
  },
  es: {
    form: {
      titleLogin: 'Iniciar Sesion',
      titleResetPassword: 'Recuperar password',
      email: 'Correo',
      password: 'Contraseña',
      submit: 'Aceptar',
      back: 'Atrás',
      forgot_password: 'He olvidado la contraseña',
      refresh: 'Limpiar formulario',
      reset: 'Cambiar contraseña',
      code: 'Código de verificación',
      rules: {
        required: 'Requerido',
        characters: 'Mínimo 8 caracteres',
      },
    },
    actions: {
      close: 'Cerrar',
    },
    flags: {
      es: '🇪🇸',
      en: '🇺🇸',
    },
    errors: {
      UserNotFoundException: 'El usuario no existe',
      NotAuthorizedException: 'Nombre de usuario o password incorrectas',
      UserNotFoundException: 'nombre de usuario incorrecto',
      CodeMissmatchException: 'El codigo de verificación no es correcto',
      InvalidPasswordException:
        'La password no es correcta: Debe contener al menos un caracter',
      GetTeamsMaster: 'Ha ocurrido un error al obtener los equipos',
    },
    success: {
      UserLogin: 'Usuario logeado con éxito',
      ResetPassword: 'Password modificada con éxito',
    },
    info: {
      CheckEmailCode:
        'Se le ha enviado un código vía email para reestablecer su contraseña',
    },
  },
}
