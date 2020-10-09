<template>
  <v-app-bar class="vv-toolbar" color="secondary darken-2" dark fixed app>
    <v-app-bar-nav-icon class="hidden-md-and-up" @click.stop="$emit('toggleDrawer')"></v-app-bar-nav-icon>
    <nuxt-link tag="v-toolbar-title" class="vv-logo" to="/">
      <img src="~/assets/images/ff-logo.png" alt="Front-End Foxes Logo" /> Front-End Foxes
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text to="/about" nuxt>{{ $t('menu.about') }}</v-btn>
      <v-btn text to="/sponsors" nuxt>{{ $t('menu.sponsors') }}</v-btn>
      <v-btn text to="/team" nuxt>{{ $t('menu.team') }}</v-btn>
      <v-btn text to="/gallery" nuxt>{{ $t('menu.gallery') }}</v-btn>
      <v-btn text href="https://dev.to/frontendfoxes" target="_blank">Blog</v-btn>
      <v-btn text href="https://etsy.com/shop/vuevixens" target="_blank">{{ $t('menu.shop') }}</v-btn>
      <a class="github-link" text href="https://github.com/frontendfoxes" target="_blank">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import messages from "../assets/translations/header";
export default {
  computed: {
    currentLocale() {
      switch (this.$i18n.locale) {
        case "en":
          return {
            language: this.$t("languages.en"),
            flag: "flag-icon-gb"
          };
        case "es":
          return {
            language: this.$t("languages.es"),
            flag: "flag-icon-es"
          };
        case "pt":
          return {
            language: this.$t("languages.pt"),
            flag: "flag-icon-pt"
          };
        case "pt_br":
          return {
            language: this.$t("languages.pt_br"),
            flag: "flag-icon-br"
          };
        case "fr":
          return {
            language: this.$t("languages.fr"),
            flag: "flag-icon-fr"
          };
      }
    }
  },
  i18n: {
    messages
  }
};
</script>

<style scoped lang="scss">
.vv-logo {
  display: flex;
  align-items: center;
  margin: 0;
  cursor: pointer;
  img {
    max-width: 40px;
    margin-right: 10px;
  }
}

.vv-toolbar {
  z-index: 5;
}

.github-link {
  color: #fff;
  align-self: center;
  padding-right: 20px;
  .fa-2x {
    font-size: 1.5em;
  }
}
</style>
