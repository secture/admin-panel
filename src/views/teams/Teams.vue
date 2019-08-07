<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <h1>Teams content</h1>
        <p>{{ teams }}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {
  mapActions as mapActionsTeams,
  mapGetters as mapGettersTeams,
} from '@/store/modules/teams'
import * as teamsGetters from '@/store/modules/teams/getters'
import * as actionsTeams from '@/store/modules/teams/types'
import TeamsService from '@/api/admin/teamsService'

import DataTable from '@/components/LoginForm'

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      title: 'Lista de jugadores',
      headers: null,
      teams: null,
      editPlayer: null,
      defaultPlayer: null,
    }
  },
  computed: {
    ...mapGettersTeams({
      teamsStored: teamsGetters.GET_TEAMS,
    }),
  },
  methods: {
    ...mapActionsTeams({
      getTeams: actionsTeams.GET_TEAMS,
      setCurrentTeam: actionsTeams.SET_CURRENT_TEAM,
    }),
  },
  mounted() {
    if (this.teamsStored === null) {
      this.getTeams().then(teamsMaster => {
        if (teamsMaster !== null) {
          this.teams = teamsMaster
        }
      })
    }
  },
}
</script>
<style>
</style>
