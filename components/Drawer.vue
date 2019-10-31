<template>
  <v-navigation-drawer
    disable-resize-watcher
    :value="showDrawer"
    @input="$emit('toggleDrawer', $event)"
    app
    class="secondary darken-2"
    dark
  >
    <v-list>
      <v-list-tile to="/about">
        <v-list-tile-title class="subheading">{{ $t("menu.about") }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile to="/sponsors">
        <v-list-tile-title class="subheading">{{ $t("menu.sponsors") }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile to="/team">
        <v-list-tile-title class="subheading">{{ $t("menu.team") }}</v-list-tile-title>
      </v-list-tile>
      <v-list-tile to="/gallery">
        <v-list-tile-title class="subheading">{{ $t("menu.gallery") }}</v-list-tile-title>
      </v-list-tile>

      <v-list-tile href="https://dev.to/vuevixens" target="_blank">
        <v-list-tile-title class="subheading">Blog</v-list-tile-title>
      </v-list-tile>
      <v-list-tile href="http://vuevixens.com/" target="_blank">
        <v-list-tile-title class="subheading">{{ $t("menu.shop") }}</v-list-tile-title>
      </v-list-tile> 
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import messages from "../assets/translations/header";

export default {
  props: ["showDrawer"],
  i18n: {
    messages
  }
};
</script>
