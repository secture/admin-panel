<template>
  <v-card class="elevation-12">
    <v-toolbar dark color="primary">
      <v-toolbar-title>Login form</v-toolbar-title>
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
      <form>
        <v-text-field
          class="pt-4"
          v-model="email"
          v-validate="'required|email'"
          :error-messages="errors.collect('email')"
          label="E-mail"
          data-vv-name="email"
          required
        ></v-text-field>
        <v-text-field
          class="pt-4"
          v-model="password"
          v-validate="'required|password'"
          :error-messages="errors.collect('password')"
          label="Password"
          data-vv-name="password"
          required
        ></v-text-field>
      </form>
    </v-card-text>
    <v-card-actions class="pa-3">
      <v-btn @click="clear" flat large>back</v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="submit" large color="secondary">submit</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new',
  },
  data: () => ({
    email: '',
    password: '',
    dictionary: {
      attributes: {
        email: 'E-mail Address',
        password: 'Password',
        // custom attributes
      },
    },
  }),
  methods: {
    submit() {
      this.$validator.validateAll()
    },
    clear() {
      this.password = ''
      this.email = ''
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
