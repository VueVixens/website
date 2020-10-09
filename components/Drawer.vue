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
      <v-list-item to="/about">
        <v-list-item-title class="subheading">{{ $t('menu.about') }}</v-list-item-title>
      </v-list-item>
      <v-list-item to="/sponsors">
        <v-list-item-title class="subheading">{{ $t('menu.sponsors') }}</v-list-item-title>
      </v-list-item>
      <v-list-item to="/team">
        <v-list-item-title class="subheading">{{ $t('menu.team') }}</v-list-item-title>
      </v-list-item>
      <v-list-item to="/gallery">
        <v-list-item-title class="subheading">{{ $t('menu.gallery') }}</v-list-item-title>
      </v-list-item>
      <v-list-item href="https://dev.to/frontendfoxes" target="_blank">
        <v-list-item-title class="subheading">Blog</v-list-item-title>
      </v-list-item>
      <v-list-item href="https://etsy.com/shop/vuevixens" target="_blank">
        <v-list-item-title class="subheading">{{ $t('menu.shop') }}</v-list-item-title>
      </v-list-item>
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
