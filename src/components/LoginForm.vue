<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{$t('form.titleLogin')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn @click="clear" icon large v-on="on">
            <v-icon large>refresh</v-icon>
          </v-btn>
        </template>
        <span>{{$t('form.refresh')}}</span>
      </v-tooltip>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field
          class="pt-4"
          v-model="user.email"
          :rules="emailRules"
          :label="$t('form.email')"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-text-field
          class="pt-4"
          v-model="user.password"
          :append-icon="showPassword ? 'visibility' : 'visibility_off'"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          :label="$t('form.password')"
          hint="la contraseña cumple las restricciones"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-form>
      <div class="reset-password">
        <router-link to="/reset-password">{{$t('form.forgot_password')}}</router-link>
      </div>
    </v-card-text>
    <v-card-actions class="pa-3">
      <v-spacer></v-spacer>
      <v-btn :disabled="!valid" @click="submit" large color="secondary">{{$t('form.submit')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions as mapActionsAuth } from '@/store/modules/auth'
import * as auth from '@/store/modules/auth/types'
import router from '@/router'

export default {
  data: () => ({
    valid: true,
    lazy: false,
    user: {
      email: '',
      password: '',
    },
    emailRules: [
      value => !!value || 'El email es requerido',
      value => /.+@.+\..+/.test(value) || 'El email debe ser válido',
    ],
    passwordRules: [
      value => !!value || 'Requerido',
      value => (value && value.length >= 8) || 'Mínimo 8 caracteres',
    ],
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        password: 'Password',
      },
    },
    showPassword: false,
  }),
  methods: {
    ...mapActionsAuth({
      loginUser: auth.LOGIN,
      cognitoUser: auth.SETCOGNITOUSER,
    }),
    submit() {
      if (this.$refs.form.validate()) {
        this.loginUser(this.user).then(cognitoUser => {
          if (cognitoUser !== null) {
            router.push({ path: '/' })
          }
        })
      }
    },
    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>

<style lang="scss">
.card-form {
  width: 100%;
}
.reset-password {
  margin-top: 15px;
}
</style>
