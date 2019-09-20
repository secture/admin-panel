<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <h1>Home Content</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Home'
})
export default class Home extends Vue {}
</script>
