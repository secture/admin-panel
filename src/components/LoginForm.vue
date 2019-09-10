<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{$t('form.titleLogin')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="clear" icon large>
            <v-icon large>refresh</v-icon>
          </v-btn>
        </template>
        <span>{{$t('form.refresh')}}</span>
      </v-tooltip>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid" :lazy-validation="lazy">
        <v-text-field
          v-model="user.email"
          :rules="emailRules"
          :label="$t('form.email')"
          class="pt-4"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-text-field
          v-model="user.password"
          :append-icon="showPassword ? 'visibility' : 'visibility_off'"
          :rules="passwordRules"
          :type="showPassword ? 'text' : 'password'"
          :label="$t('form.password')"
          @click:append="showPassword = !showPassword"
          class="pt-4"
          hint="la contraseña cumple las restricciones"
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

<script lang="ts">
import Vue from 'vue'
import { mapActions } from '@/store/modules/auth'
import * as auth from '@/store/modules/auth/types'
import router from '@/router'
export type VForm = Vue & { validate: () => boolean }

import { User } from '@/types'

export default Vue.extend({
  data: () => ({
    valid: true,
    lazy: false,
    user: {
      email: '',
      password: '',
    } as User,
    emailRules: [
      (value: any) => !!value || 'El email es requerido',
      (value: any) => /.+@.+\..+/.test(value) || 'El email debe ser válido',
    ],
    passwordRules: [
      (value: any) => !!value || 'Requerido',
      (value: any) => (value && value.length >= 8) || 'Mínimo 8 caracteres',
    ],
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        password: 'Password',
      },
    },
    showPassword: false,
  }),
  computed: {
    form(): HTMLFormElement {
      return this.$refs.form as HTMLFormElement
    },
  },
  methods: {
    ...mapActions({
      loginUser: auth.LOGIN,
    }),
    submit() {
      if (this.form.validate()) {
        this['loginUser'](this.user).then((cognitoUser: any) => {
          if (cognitoUser !== null) {
            router.push({ path: '/' })
          }
        })
      }
    },
    clear() {
      this.form.reset()
    },
  },
})
</script>

<style lang="scss">
.card-form {
  width: 100%;
}
.reset-password {
  margin-top: 15px;
}
</style>
