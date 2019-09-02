<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <h1>{{ title }}</h1>
        <v-data-table
          :headers="headers"
          :items="teams.results"
          :items-per-page="5"
          class="elevation-1"
        >
          <template v-slot:items="props">
            <td class="text-start">{{ props.item.dspId }}</td>
            <td class="text-start">{{ props.item.id }}</td>
            <td class="text-start">{{ props.item.name }}</td>
            <td class="text-start">{{ props.item.shortName }}</td>
            <td class="text-start">{{ props.item.slug }}</td>
            <td class="text-start">{{ props.item.badgeColor }}</td>
            <td class="text-start">{{ props.item.badgeGray }}</td>
            <td class="text-start">{{ props.item.badgeWhite }}</td>
          </template>
        </v-data-table>
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

export default {
  data() {
    return {
      title: 'Lista de jugadores',
      headers: [
        { text: 'dsp id', align: 'left', value: 'dspId' },
        { text: 'id', align: 'left', value: 'id' },
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Short Name', align: 'left', value: 'shortName' },
        { text: 'Slug', align: 'left', value: 'slug' },
        { text: 'Badge Color', align: 'left', value: 'badgeColor' },
        { text: 'Badge Gray', align: 'left', value: 'badgeGray' },
        { text: 'Badge White', align: 'left', value: 'badgeWhite' },
      ],
      teams: {
        page: 0,
        pageSize: 0,
        results: [],
        totalResults: 0,
      },
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
