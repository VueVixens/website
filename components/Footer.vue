<template>
  <v-footer height="auto" color="secondary darken-2">
    <v-layout class="footer-links hidden-sm-and-down" justify-start align-center row wrap>
      <v-btn color="white" text rounded to="/credits">{{ $t("credits") }}</v-btn>
      <v-btn
        color="white"
        text
        rounded
        href="https://spark.adobe.com/page/FFczmvHR6Brpu/"
        target="_blank"
      >{{ $t("press") }}</v-btn>
      <v-btn
        color="white"
        text
        rounded
        href="mailto:info@vuevixens.org"
        target="_blank"
      >{{ $t("contact") }}</v-btn>
      <v-btn color="white" text rounded to="/about">{{ $t("charity") }}</v-btn>
    </v-layout>
    <v-layout justify-end align-center row wrap>
      <nuxt-link to="/announcements">
        <i class="fas fa-bullhorn fa-2x"></i>
      </nuxt-link>
      <a href="https://twitter.com/frontendfoxes" target="_blank">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="https://communityinviter.com/apps/vuevixens/front-end-foxes" target="_blank">
        <i class="fab fa-slack fa-2x"></i>
      </a>
    </v-layout>
  </v-footer>
</template>

<script>
import messages from "../assets/translations/footer";

export default {
  i18n: {
    messages
  }
};
</script>

<style scoped lang="scss">
a {
  display: flex;
  padding: 0 15px;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
  i {
    font-size: 22px;
    color: white;
  }
}
</style>
