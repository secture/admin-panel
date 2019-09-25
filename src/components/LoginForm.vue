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
                        hint="$t('error.passwordPassRestriction')"
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
  import { Component, Vue } from 'vue-property-decorator'
  import * as types from '@/store/modules/auth/types'
  import router from '@/router'

  export type VForm = Vue & { validate: () => boolean }

  import { State, Action } from 'vuex-class'
  import { User, Auth } from '@/models/auth'

  const namespace: string = types.namespace

  @Component
  export default class LoginForm extends Vue {
    @State('auth') authState!: Auth
    @Action(types.LOGIN, { namespace }) loginUser: any

    public valid: boolean = true
    public lazy: boolean = false

    public user: User = {
      email: '',
      password: '',
    }
    public emailRules: Array<any> = [
      (value: any) => !!value || this.$t('form.rules.emailRequired'),
      (value: any) => /.+@.+\..+/.test(value) || this.$t('form.rules.emailMustBeValid'),
    ]
    public passwordRules: Array<any> = [
      (value: any) => !!value || this.$t('form.rules.required'),
      (value: any) => (value && value.length >= 8) || this.$t('form.rules.emailRequired'),
    ]
    public dictionary: any = {
      attributes: {
        email: this.$t('form.email'),
        password: this.$t('form.password'),
      },
    }
    public showPassword: boolean = false

    get form(): HTMLFormElement {
      return this.$refs.form as HTMLFormElement
    }

    submit(): void {
      if (this.form.validate()) {
        this.loginUser(this.user).then((cognitoUser: any) => {
          if (cognitoUser !== null) {
            router.push({ path: '/' })
          }
        })
      }
    }

    clear(): void {
      this.form.reset()
    }
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
