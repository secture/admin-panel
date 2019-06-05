<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Recover Password</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn @click="clear" icon large v-on="on">
            <v-icon large>refresh</v-icon>
          </v-btn>
        </template>
        <span>Refresh Form</span>
      </v-tooltip>
    </v-toolbar>
    <v-card-text>
      <v-text-field class="pt-4" v-model="user.email" label="E-mail" required></v-text-field>
      <v-text-field v-if="reset" class="pt-4" v-model="user.code" label="code" required></v-text-field>
      <v-text-field v-if="reset" class="pt-4" v-model="user.newPassword" label="password" required></v-text-field>
    </v-card-text>
    <v-card-actions class="pa-3">
      <v-btn @click="clear" flat large>back</v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="reset === false" @click="forgotPassword()" large color="secondary">forgot</v-btn>
      <v-btn v-if="reset === true" @click="resetPassword()" large color="secondary">reset</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapGetters } from '@/store/modules/auth'
import * as auth from '@/store/modules/auth/getters'
import * as actions from '@/store/modules/auth/types'
import router from '@/router'

export default {
  data: () => ({
    user: {
      email: '',
      newPassword: '',
      code: '',
    },
  }),
  computed: {
    ...mapGetters({
      reset: auth.GET_RESET_PASSWORD,
    }),
  },
  methods: {
    ...mapActions({
      forgotPasswordCognito: actions.FORGOT_PASSWORD,
      resetPasswordCognito: actions.RESET_PASSWORD,
    }),
    forgotPassword() {
      if (this.user.email !== '') {
        this.forgotPasswordCognito(this.user.email)
      }
    },
    resetPassword() {
      if (this.validateData() === true) {
        this.resetPasswordCognito(this.user).then(resetPassword => {
          if (resetPassword === true) {
            console.log('La password ha sido cambiada')
            router.push({ path: '/login' })
          }
        })
      }
    },
    validateData() {
      if (
        this.user.email !== '' &&
        this.user.code !== '' &&
        this.user.newPassword !== ''
      ) {
        return true
      } else {
        return false
      }
    },
    clear() {
      this.user.email = ''
    },
  },
}
</script>

<style>
</style>
