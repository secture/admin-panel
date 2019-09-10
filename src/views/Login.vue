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
import Vue from 'vue'
import LoginForm from '@/components/LoginForm.vue'

export default Vue.extend({
  components: {
    LoginForm,
  },
})
</script>
<style></style>
