<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12>
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("title") }}</h2>
        <p class="vv-content title text-xs-center">{{ $t("subtitle") }}</p>
        <p>{{ $t("content") }}</p>
        <ul>
          <li>{{ $t("li1") }}</li>
          <li>{{ $t("li2") }}</li>
          <li>{{ $t("li3") }}</li>
        </ul>
        <div class="button-wrapper text-xs-center">
          <v-btn
            color="secondary darken-2"
            dark
            href="https://ladeezfirstmedia.typeform.com/to/dlOUZe"
            target="_blank"
          >{{ $t("button") }}</v-btn>
        </div>
      </v-flex>
    </v-container>
  </v-layout>
</template>

<script>
import messages from "../assets/translations/request";
export default {
  i18n: {
    messages
  },
  head() {
    return {
      title: `Event Request`,
      meta: [
        { hid: 'description', name: 'description', content: `Request a Vue Vixens workshop at your event` }
      ]
    }
  }
};
</script>

<style scoped>
.button-wrapper {
  padding-top: 30px;
}

p {
  padding-bottom: 15px;
}
</style>
