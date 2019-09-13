<template>
  <v-container fluid fill-height primary_light>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <login-form></login-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import LoginForm from '@/components/LoginForm.vue'

@Component({
  components: {
    LoginForm,
  },
})
export default class Login extends Vue {}
</script>
<style></style>
