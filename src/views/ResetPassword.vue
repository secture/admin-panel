<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <reset-password-form></reset-password-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ResetPasswordForm from '@/components/ResetPasswordForm'

export default {
  components: {
    ResetPasswordForm,
  },
}
</script>
<style></style>
