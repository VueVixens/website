<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12>
        <h2 class="vv-subheading font-lato text-center">{{ $t("title") }}</h2>
        <p class="text-center vv-content title">{{ $t("subtitle") }}</p>
        <ul class="list">
          <i18n tag="li" path="item1">
            <a href="https://unsplash.com/" place="unsplash">{{ $t("unsplashLink") }}</a>
            <a
              place="mainPage"
              href="https://www.deviantart.com/verniannguyen/"
            >{{ $t("mainPageLink") }}</a>
          </i18n>
          <i18n class="list-item" tag="li" path="item2">
            <a class="link-green" href="http://www.ng-girls.org" place="ngGirls">ng-Girls</a>
            <a class="link-green" href="http://www.djangogirls.org" place="djangoGirls">Django Girls</a>
            <a class="link-green" href="http://railsbridge.org/" place="railsBridge">Rails Bridge</a>
          </i18n>
        </ul>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
import messages from "../assets/translations/credits";
export default {
  i18n: { messages }
};
</script>

<style scoped>
p {
  padding-bottom: 15px;
}
</style>
