<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{this.$root.$t('form.titleResetPassword')}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="clear" icon large>
            <v-icon large>refresh</v-icon>
          </v-btn>
        </template>
        <span>{{this.$root.$t('form.refresh')}}</span>
      </v-tooltip>
    </v-toolbar>
    <v-card-text>
      <v-text-field v-model="user.email" :label="this.$root.$t('form.email')" class="pt-4" required></v-text-field>
      <v-text-field v-if="reset" v-model="user.code" :label="this.$root.$t('form.code')" class="pt-4" required></v-text-field>
      <v-text-field
        v-if="reset"
        v-model="user.newPassword"
        :label="this.$root.$t('form.password')"
        class="pt-4"
        required
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="pa-3">
      <v-btn @click="backTo()" flat large>{{this.$root.$t('form.back')}}</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="reset === false"
        @click="forgotPassword()"
        large
        color="secondary"
      >{{this.$root.$t('form.submit')}}</v-btn>
      <v-btn
        v-if="reset === true"
        @click="resetPassword()"
        large
        color="secondary"
      >{{this.$root.$t('form.reset')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import * as types from '@/store/modules/auth/types'
import * as getters from '@/store/modules/auth/getters'
import router from '@/router'

import { Action, Getter } from 'vuex-class'
import { Auth, UserResetPassword } from '@/models/auth'
const namespace: string = types.namespace

@Component
export default class resetPasswordForm extends Vue {
  @Action(types.FORGOT_PASSWORD, { namespace }) forgotPasswordCognito: any
  @Action(types.RESET_PASSWORD, { namespace }) resetPasswordCognito: any
  @Getter(getters.GET_RESET_PASSWORD, { namespace }) reset!: boolean

  public user: UserResetPassword = {
    email: '',
    newPassword: '',
    code: '',
  }

  forgotPassword(): void {
    if (this.user.email !== '') {
      this.forgotPasswordCognito(this.user.email)
    }
  }
  resetPassword(): void {
    if (this.validateData() === true) {
      this.resetPasswordCognito(this.user).then((resetPassword: any) => {
        if (resetPassword === true) {
          router.push({ path: '/login' })
        }
      })
    }
  }
  validateData(): boolean {
    return this.user.email !== '' &&
      this.user.code !== '' &&
      this.user.newPassword !== '';
  }
  clear(): void {
    this.user.email = ''
  }
  backTo(): void {
    router.push({ path: '/login' })
  }
}
</script>

<style>
</style>
