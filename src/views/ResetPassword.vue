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
import Vue from 'vue';
import ResetPasswordForm from '@/components/ResetPasswordForm.vue'

export default Vue.extend({
  components: {
    ResetPasswordForm,
  },
})
</script>
<style></style>
