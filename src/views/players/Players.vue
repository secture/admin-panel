<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <h1>Players content</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  mapActions as mapActionsPlayers,
  mapGetters as mapGettersPlayers,
} from '@/store/modules/players'
import * as playersGetters from '@/store/modules/players/getters'
import * as playersActions from '@/store/modules/players/types'

export default {
  data() {
    return {
      players: null,
    }
  },
  mounted() {
    if (this.playersStored.results === null) {
      this.getPlayers().then(playerMaster => {
        if (playerMaster !== null) {
          this.players = playerMaster
        }
      })
    } else {
      this.players = this.playersStored
    }
  },
  computed: {
    ...mapGettersPlayers({
      playersStored: playersGetters.GET_PLAYERS,
    }),
  },
  methods: {
    ...mapActionsPlayers({
      getPlayers: playersActions.GET_PLAYERS,
    }),
  },
}
</script>

<style>
</style>
