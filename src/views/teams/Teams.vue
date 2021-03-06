<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <v-dialog v-model="dialog" max-width="40em">
          <v-card>
            <v-card-title>
              <span class="headline">{{$t('teams.editTeams')}}</span>
            </v-card-title>
            <v-card-text class="px-0">
              <v-container>
                <v-layout row>
                  <v-flex md12>
                    <v-text-field v-model="editedTeam.dspId" label="Dsp id"></v-text-field>
                    <!--<v-text-field v-model="editedTeam.id" label="Id"></v-text-field>
                    <v-text-field v-model="editedTeam.name" label="Name"></v-text-field>
                    <v-text-field v-model="editedTeam.shortName" label="Short name"></v-text-field>
                    <v-text-field v-model="editedTeam.slug" label="Slug"></v-text-field>-->
                    <v-text-field v-model="editedTeam.store" label="Store"></v-text-field>
                    <!--<v-text-field v-model="editedTeam.badgeColor" label="Badge color"></v-text-field>
                    <v-text-field v-model="editedTeam.badgeGray" label="Badge gray"></v-text-field>
                    <v-text-field v-model="editedTeam.badgeWhite" label="Badge white"></v-text-field>-->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions class="justify-self-end pa-4">
              <v-spacer></v-spacer>
              <v-btn @click="close" flat color="pink" text>{{$t('actions.cancel')}}</v-btn>
              <v-btn @click="confirmEditTeam()" dark color="teal" text>{{$t('actions.save')}}</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-card>
          <v-card-title class="d-flex justify-space-around">
            <span class="headline">{{$t('teams.listTeams')}}</span>
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
              :items="teams.results"
              :search="search"
              :loading="teams.results.length === 0"
              loading-text="Cargando equipos"
              class="elevation-1"
            >
              <template v-slot:items="props">
                <td class="justify-center pa-2">
                  <img :src="props.item.badgeColor" alt />
                </td>
                <td class="text-start pa-2">{{ props.item.dspId }}</td>
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
                  <v-btn @click="editTeam(props.item)" icon class="mx-0">
                    <v-icon color="teal">{{$t('actions.edit')}}</v-icon>
                  </v-btn>
                  <v-btn @click="deleteTeam(props.item)" icon class="mx-0">
                    <v-icon color="pink">{{$t('actions.delete')}}</v-icon>
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
import * as getters from '@/store/modules/teams/getters'
import * as types from '@/store/modules/teams/types'

import { Action, Getter } from 'vuex-class'
import { InfoTeams, DataTeams } from '@/models/teams'
const namespace: string = types.namespace

@Component
export default class Teams extends Vue {
  @Action(types.GET_TEAMS, { namespace }) getTeams: any
  @Action(types.UPDATE_TEAM, { namespace }) updatedTeam: any
  @Getter(getters.GET_DATA, { namespace }) dataTeams!: DataTeams

  public search: string = ''
  public dialog: boolean = false
  public headers: Array<any> = [
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
  ]
  public teams: DataTeams = {
    page: 0,
    pageSize: 0,
    results: [],
    totalResults: 0,
  }
  public editedTeam: any = {
    dspId: 0,
    store: '',
  }

  @Watch('dialog')
  onDialogChange(value) {
    value || this.close()
  }
  mounted() {
    if (this.dataTeams.results.length === 0) {
      this.getTeams().then((teamsMaster: any) => {
        if (teamsMaster !== null) {
          this.teams = teamsMaster
        }
      })
    } else {
      this.teams = this.dataTeams
    }
  }
  confirmEditTeam() {
    this.updatedTeam(this.editedTeam).then((response: any) => {
      if (response !== null) {
        this.getTeams().then((teamsMaster: any) => {
          if (teamsMaster !== null) {
            this.teams = teamsMaster
          }
        })
      }
    })
    this.close()
  }

  editTeam(team: any) {
    this.editedTeam = Object.assign({}, team)
    this.dialog = true
  }

  deleteTeam(team: any) {
    console.log(team)
  }

  close() {
    this.dialog = false
  }
}
</script>
<style lang="scss">
tr {
  th {
    padding: 8px !important;
  }
}
td {
  img {
    width: 2em;
  }
}
</style>
