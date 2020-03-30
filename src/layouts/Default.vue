<template>
  <v-app>
    <slot></slot>
    <LanguageButton></LanguageButton>
    <SnackBar></SnackBar>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import LanguageButton from '@/components/LanguageButton.vue'
import SnackBar from '@/components/SnackBar.vue'

Vue.use(VeeValidate)

export default Vue.extend({
  components: {
    LanguageButton,
    SnackBar,
  }
})
</script>
