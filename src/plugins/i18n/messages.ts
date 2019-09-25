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
        emailRequired: 'Email required',
        emailMustBeValid: 'The email must be valid',
        characters: 'Min 8 characters',
      },
    },
    actions: {
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
    },
    flags: {
      es: '🇪🇸',
      en: '🇺🇸',
    },
    errors: {
      UserNotFoundException: 'User does not exist',
      NotAuthorizedException: 'Incorrect username or password.',
      CodeMissmatchException: 'User code verification is not correct',
      InvalidPasswordException:
        'Password does not conform to policy: Password must have symbol characters',
      GetTeamsMaster: 'An error has occurred when retrieve teams',
      UpdateTeamMaster: 'n error has occurred when updated the team',
      passwordPassRestriction: 'the password meets the restrictions',
    },
    success: {
      UserLogin: 'Success user logged',
      ResetPassword: 'Success changed password',
    },
    info: {
      CheckEmailCode:
        'You have been sent a code via email to reset your password',
    },
    teams: {
      teamUpdated: 'Team updated',
      listTeams: 'List of teams',
      editTeams: 'Edit teams',
    },
    players: {
      playerUpdated: 'Player updated',
      listPlayers: 'List of players',
      editPlayers: 'Edit players',
      loadPlayers: 'Loading players',
    },
    dashboard: {
      home: 'Home',
      teams: 'Teams',
      players: 'Players',
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
      edit: 'Editar',
      delete: 'Borrar',
      forgot_password: 'He olvidado la contraseña',
      refresh: 'Limpiar formulario',
      reset: 'Cambiar contraseña',
      code: 'Código de verificación',
      rules: {
        required: 'Requerido',
        emailRequired: 'El email es requerido',
        emailMustBeValid: 'El email debe ser válido',
        characters: 'Mínimo 8 caracteres',
      },
    },
    actions: {
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar',
      edit: 'Editar',
      delete: 'Borrar',
    },
    flags: {
      es: '🇪🇸',
      en: '🇺🇸',
    },
    errors: {
      UserNotFoundException: 'El usuario no existe',
      NotAuthorizedException: 'Nombre de usuario o password incorrectas',
      CodeMissmatchException: 'El codigo de verificación no es correcto',
      InvalidPasswordException:
        'La password no es correcta: Debe contener al menos un caracter',
      GetTeamsMaster: 'Ha ocurrido un error al obtener los equipos',
      UpdateTeamMaster: 'Ha ocurrido un error al actualizar el equipo',
      passwordPassRestriction: 'la contraseña cumple las restricciones',
    },
    success: {
      UserLogin: 'Usuario logeado con éxito',
      ResetPassword: 'Password modificada con éxito',
    },
    info: {
      CheckEmailCode:
        'Se le ha enviado un código vía email para reestablecer su contraseña',
    },
    teams: {
      teamUpdated: 'Equipo editado',
      listTeams: 'Listado de equipos',
      editTeams: 'Editar equipos',
    },
    players: {
      playerUpdated: 'Jugador editado',
      listPlayers: 'Listado de jugadores',
      editPlayers: 'Editar jugadores',
      loadPlayers: 'Cargando jugadores',
    },
    dashboard: {
      home: 'Inicio',
      teams: 'Equipos',
      players: 'Jugadores',
    },
  },
}
