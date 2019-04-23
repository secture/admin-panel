<template>
  <v-layout>
    <v-flex xs12 sm4 offset-sm4>
      <v-card>
        <v-icon v-text="'fingerprint'"></v-icon>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Login</h3>
          </div>
        </v-card-title>
        <v-card-actions>
          <form>
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              :error-messages="errors.collect('email')"
              label="E-mail"
              data-vv-name="email"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              v-validate="'required|password'"
              :error-messages="errors.collect('password')"
              label="Password"
              data-vv-name="password"
              required
            ></v-text-field>

            <v-btn @click="submit">submit</v-btn>
            <v-btn @click="clear">clear</v-btn>
          </form>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
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
<style></style>
