<template>
  <v-container fluid fill-height primary_light>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <reset-password-form></reset-password-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ResetPasswordForm from '@/components/ResetPasswordForm.vue'

@Component({
  components: {
    ResetPasswordForm,
  },
})
export default class ResetPassword extends Vue {}
</script>
<style></style>
