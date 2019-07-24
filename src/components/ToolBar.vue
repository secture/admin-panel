<template>
  <v-toolbar flat dark class="primary_dark">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <v-flex>
          <v-avatar size="32px" class="ma-1">
            <img
              v-if="userLoged"
              src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
              alt="Avatar"
            />
            <!--<v-icon v-else :color="message.color" v-text="message.icon"></v-icon>-->
          </v-avatar>
        </v-flex>
        <v-flex>
          <strong v-html="email"></strong>
        </v-flex>
      </v-btn>
      <v-btn flat @click="signOut()">
        <span>Logout</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from '@/store/modules/auth'
import * as authGet from '@/store/modules/auth/getters'
import * as actions from '@/store/modules/auth/types'
import router from '@/router'

export default {
  name: 'ToolBar',
  data() {
    return {
      title: 'PANELADMIN',
    }
  },
  computed: {
    ...mapGetters({
      email: authGet.GET_EMAIL,
      userLoged: authGet.GET_LOGIN,
    }),
  },
  methods: {
    ...mapActions({
      signOutUser: actions.LOGOUT,
    }),
    signOut() {
      this.signOutUser()
      router.push({ path: '/login' })
    },
  },
}
</script>
