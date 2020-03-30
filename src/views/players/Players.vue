<template>
    <v-container fluid>
        <v-layout align-center justify-center>
            <v-flex xs12>
                <v-dialog v-model="dialog" max-width="40em">
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>
                        <v-card-text class="px-0">
                            <v-container>
                                <v-layout row>
                                    <v-flex md12>
                                        <v-text-field v-model="editedPlayer.name" label="Name"></v-text-field>
                                        <v-text-field v-model="editedPlayer.nickname" label="Nickname"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-card-actions class="justify-self-end pa-4">
                            <v-spacer></v-spacer>
                            <v-btn @click="close" flat color="pink" text>{{$t('actions.close')}}</v-btn>
                            <v-btn @click="confirmEditPlayer()" dark color="teal" text>{{$t('actions.save')}}</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-card>
                    <v-card-title class="d-flex justify-space-around">
                        <span class="headline">{{$t(title)}}</span>
                        <v-text-field
                                v-model="search"
                                append-icon="search"
                                label="Search"
                                single-line
                                hide-details
                                class="pa-0 ma-0"
                        ></v-text-field>
                    </v-card-title>
                    <v-card-text>
                        <v-data-table
                                :headers="headers"
                                :items="players.results"
                                :loading="players.results.length === 0"
                                loading-text="$t('players.loadPlayers')"
                                class="elevation-1"
                        >
                            <template v-slot:items="props">
                                <td class="justify-center pa-2">
                                    <img :src="props.item.image96x96" alt/>
                                </td>
                                <td class="text-start pa-2">{{ props.item.id }}</td>
                                <td class="text-start pa-2">{{ props.item.name }}</td>
                                <td class="text-start pa-2">{{ props.item.nickname }}</td>
                                <td class="text-start pa-2">{{ props.item.position }}</td>
                                <td class="text-start pa-2">{{ props.item.team.name }}</td>
                                <td class="text-start pa-2">{{ props.item.playerStatus }}</td>
                                <td class="text-start pa-2 layout">
                                    {{ props.item.action }}
                                    <v-btn @click="editPlayer(props.item)" icon class="mx-0">
                                        <v-icon color="teal">edit</v-icon>
                                    </v-btn>
                                    <v-btn @click="deletePlayer(props.item)" icon class="mx-0">
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
    @Action(types.UPDATE_PLAYER, { namespace }) updatedPlayer: any
    @Getter(getters.GET_DATA, { namespace }) playersStored!: DataPlayers

    public title: string = 'players.listPlayers'
    public formTitle: string = 'Buscar equipo'
    public search: string = ''
    public dialog: boolean = false
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
    public editedPlayer: any = {
      name: '',
      nickname: '',
    }

    @Watch('dialog')
    onDialogChange(value) {
      value || this.close()
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

    confirmEditPlayer() {
      this.updatedPlayer(this.editedPlayer).then(response => {
        if (response !== null) {
          this.getPlayers().then(players => {
            if (players !== null) {
              this.players = players
            }
          })
        }
      })
      this.close()
    }

    editPlayer(player) {
      this.editedPlayer = Object.assign({}, player)
      this.dialog = true
    }

    deletePlayer(player) {
      console.log(player)
    }

    close() {
      this.dialog = false
    }
  }
</script>
<style>
</style>
