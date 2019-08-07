<template>
  <v-app>
    <slot></slot>
    <LanguageButton></LanguageButton>
    <SnackBar></SnackBar>
  </v-app>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import LanguageButton from '@/components/LanguageButton'
import SnackBar from '@/components/SnackBar'
import store from '@/store'

Vue.use(VeeValidate)

export default {
  components: {
    LanguageButton,
    SnackBar,
  },
  mounted() {
    console.log(store)
    this.$validator.localize('en', this.dictionary)
  },
}
</script>
