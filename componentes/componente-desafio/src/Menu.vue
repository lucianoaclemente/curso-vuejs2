<template>
    <v-navigation-drawer app>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
                Menu
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <app-menu-item />  

    </v-navigation-drawer>
</template>

<script>

import MenuItem from './MenuItem.vue'

export default {
    components : {
        'app-menu-item':  MenuItem
    }
}
</script>

<style>

</style>