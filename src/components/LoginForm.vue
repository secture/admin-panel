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
      <form>
        <v-text-field
          class="pt-4"
          v-model="user.email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          :label="$t('form.email')"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-text-field
          class="pt-4"
          v-model="user.password"
          v-validate="'required|min:6|max:35'"
          :error-messages="errors.collect('password')"
          :label="$t('form.password')"
          data-vv-name="password"
          required
        ></v-text-field>
      </form>
      <router-link to="/reset-password">{{$t('form.forgot_password')}}</router-link>
    </v-card-text>
    <v-card-actions class="pa-3">
      <v-spacer></v-spacer>
      <v-btn @click="submit" large color="secondary">{{$t('form.submit')}}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from '@/store/modules/auth'
import * as actions from '@/store/modules/auth/types'
import router from '@/router'

export default {
  $_veeValidate: {
    validator: 'new',
  },
  data: () => ({
    user: {
      email: '',
      password: '',
    },
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        password: 'Password',
      },
    },
  }),
  methods: {
    ...mapActions({
      loginUser: actions.LOGIN,
      cognitoInfo: actions.SETCOGNITOINFO,
    }),
    submit() {
      if (this.$validator.validateAll()) {
        this.loginUser(this.user).then(cognitoUser => {
          this.cognitoInfo(cognitoUser)
          router.push({ path: '/' })
        })
      }
    },
    clear() {
      this.user.password = ''
      this.user.email = ''
      this.$validator.reset()
    },
  },
}
</script>

<style lang="scss">
.card-form {
  width: 100%;
}
</style>
