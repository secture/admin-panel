<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <h1>{{$t('dashboard.home')}}</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class Home extends Vue {}
</script>
