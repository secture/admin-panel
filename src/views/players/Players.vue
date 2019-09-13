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
                  <img :src="props.item.image96x96" alt />
                </td>
                <td class="text-start pa-2">{{ props.item.id }}</td>
                <td class="text-start pa-2">{{ props.item.name }}</td>
                <td class="text-start pa-2">{{ props.item.nickname }}</td>
                <td class="text-start pa-2">{{ props.item.position }}</td>
                <td class="text-start pa-2">{{ props.item.team.name }}</td>
                <td class="text-start pa-2">{{ props.item.playerStatus }}</td>
                <td class="text-start pa-2 layout">
                  {{ props.item.action }}
                  <v-btn @click="editTeam(props.item)" icon class="mx-0">
                    <v-icon color="teal">edit</v-icon>
                  </v-btn>
                  <v-btn @click="deleteTeam(props.item)" icon class="mx-0">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import * as getters from '@/store/modules/players/getters'
import * as types from '@/store/modules/players/types'

import { Action, Getter } from 'vuex-class'
import { InfoPlayers, DataPlayers } from '@/models/players'
const namespace: string = types.namespace

@Component
export default class Players extends Vue {
  @Action(types.GET_PLAYERS, { namespace }) getPlayers: any
  @Getter(getters.GET_DATA, { namespace }) playersStored!: DataPlayers

  public title: string = 'Listado de jugadores'
  public headers: Array<any> = [
    { text: 'image', align: 'left', value: 'image96x96' },
    { text: 'id', align: 'left', value: 'id' },
    { text: 'Name', align: 'left', value: 'name' },
    { text: 'Nickname', align: 'left', value: 'nickname' },
    { text: 'Posición', align: 'left', value: 'position' },
    { text: 'Equípo', align: 'left', value: 'team.name' },
    { text: 'Estado', align: 'left', value: 'playerStatus' },
    { text: 'Actions', value: 'action', sortable: false },
  ]

  public players: DataPlayers = {
    page: 0,
    pageSize: 0,
    results: [],
    totalResults: 0,
  }

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
