<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>{{$t('form.titleResetPassword')}}</v-toolbar-title>
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
      <v-text-field v-model="user.email" :label="$t('form.email')" class="pt-4" required></v-text-field>
      <v-text-field v-if="reset" v-model="user.code" :label="$t('form.code')" class="pt-4" required></v-text-field>
      <v-text-field
        v-if="reset"
        v-model="user.newPassword"
        :label="$t('form.password')"
        class="pt-4"
        required
      ></v-text-field>
    </v-card-text>
    <v-card-actions class="pa-3">
      <v-btn @click="backTo()" flat large>{{$t('form.back')}}</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        v-if="reset === false"
        @click="forgotPassword()"
        large
        color="secondary"
      >{{$t('form.submit')}}</v-btn>
      <v-btn
        v-if="reset === true"
        @click="resetPassword()"
        large
        color="secondary"
      >{{$t('form.reset')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapGetters } from '@/store/modules/auth'
import * as auth from '@/store/modules/auth/getters'
import * as actions from '@/store/modules/auth/types'
import router from '@/router'

import { UserResetPassword } from '@/types'

export default Vue.extend({
  data: () => ({
    user: {
      email: '',
      newPassword: '',
      code: '',
    } as UserResetPassword,
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
        this.resetPasswordCognito(this.user).then((resetPassword: any) => {
          if (resetPassword === true) {
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
    backTo() {
      router.push({ path: '/login' })
    },
  },
})
</script>

<style>
</style>
