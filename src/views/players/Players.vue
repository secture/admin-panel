<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-card>
          <v-card-title class="d-flex justify-space-around">
            <span class="headline">{{ title }}</span>
          </v-card-title>
          <v-card-text>
            <v-data-table
              :headers="headers"
              :items="players.results"
              :loading="players.results.length === 0"
              loading-text="Cargando jugadores"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td class="justify-center pa-2">
                  <img :src="props.item.badgeColor" alt />
                </td>
                <!--td class="text-start pa-2">{{ props.item.dspId }}</td>
                <td class="text-start pa-2">{{ props.item.id }}</td>
                <td class="text-start pa-2">{{ props.item.name }}</td>
                <td class="text-start pa-2">{{ props.item.shortName }}</td>
                <td class="text-start pa-2">{{ props.item.slug }}</td>
                <td class="text-start pa-2">{{ props.item.store }}</td>
                <td class="text-start pa-2">{{ props.item.badgeColor }}</td>
                <td class="text-start pa-2">{{ props.item.badgeGray }}</td>
                <td class="text-start pa-2">{{ props.item.badgeWhite }}</td>
                <td class="text-start pa-2 layout">
                  {{ props.item.action }}
                  <v-btn icon class="mx-0" @click="editTeam(props.item)">
                    <v-icon color="teal">edit</v-icon>
                  </v-btn>
                  <v-btn icon class="mx-0" @click="deleteTeam(props.item)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td-->
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
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
import * as actionsPlayers from '@/store/modules/players/types'

export default {
  data() {
    return {
      title: 'Listado de jugadores',
      headers: [
        { text: 'Shield', align: 'left', value: 'badgeColor' },
        { text: 'dsp id', align: 'left', value: 'dspId' },
        { text: 'id', align: 'left', value: 'id' },
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'Short name', align: 'left', value: 'shortName' },
        { text: 'Slug', align: 'left', value: 'slug' },
        { text: 'Store', align: 'left', value: 'store' },
        { text: 'Badge color', align: 'left', value: 'badgeColor' },
        { text: 'Badge gray', align: 'left', value: 'badgeGray' },
        { text: 'Badge white', align: 'left', value: 'badgeWhite' },
        { text: 'Actions', value: 'action', sortable: false },
      ],
      players: {
        page: 0,
        pageSize: 0,
        results: [],
        totalResults: 0,
      },
    }
  },
  computed: {
    ...mapGettersPlayers({
      playersStored: playersGetters.GET_DATA,
    }),
  },
  methods: {
    ...mapActionsPlayers({
      getPlayers: actionsPlayers.GET_PLAYERS,
    }),
  },
  mounted() {
    if (this.playersStored.results === null) {
      this.getPlayers().then(playersMasters => {
        if (playersMasters !== null) {
          this.players = playersMasters
        }
      })
    } else {
      this.players = this.playersStored
    }
  }
}
</script>

<style>
</style>
