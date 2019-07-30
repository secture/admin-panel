<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <h1>Home Content</h1>
        <p>{{ cognitoUser.attributes.email }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from '@/store/modules/auth'
import * as authGet from '@/store/modules/auth/getters'

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      email: authGet.GET_EMAIL,
      cognitoUser: authGet.GET_COGNITO_USER,
    }),
  },
}
</script>
<style></style>
