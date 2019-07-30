<template>
  <v-navigation-drawer absolute dark class="primary_dark">
    <v-list class="pt-0">
      <v-list-tile class="banner">
        <v-avatar class="secondary">
          <span class="white--text headline">F</span>
        </v-avatar>
        <v-list-tile-content class="banner-title">
          <v-list-tile-title>Admin Fantasy LaLiga</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <hr class="v-divider theme--dark" />
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-group prepend-icon="account_circle" value="true">
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Users</v-list-tile-title>
          </v-list-tile>
        </template>
        <v-list-group no-action sub-group value="true">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>

          <v-list-tile v-for="(admin, i) in admins" :key="i">
            <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="admin[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-group sub-group no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Actions</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(crud, i) in cruds" :key="i">
            <v-list-tile-title v-text="crud[0]"></v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      items: [{ title: 'Home', icon: 'dashboard' }],
      admins: [['Management', 'people_outline'], ['Settings', 'settings']],
      cruds: [
        ['Create', 'add'],
        ['Read', 'insert_drive_file'],
        ['Update', 'update'],
        ['Delete', 'delete'],
      ],
    }
  },
}
</script>

<style lang="scss">
hr {
  margin: 0 auto;
  width: calc(100% - 60px);
  margin-bottom: 12px;
}
.banner {
  padding: 8px;
  .banner-title {
    padding: 0 12px 0 12px;
  }
}
</style>
