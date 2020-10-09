<template>
  <v-container pt-4 pb-5>
    <v-layout wrap justify-space-around>
      <v-flex xs12 sm3 md2 pa-2 v-for="member in members" :key="member.name">
        <v-card height="100%" class="vv-card">
          <v-img
            height="150px"
            :alt="`${member.name} picture`"
            :src="member.img"
            class="grey lighten-2"
          >
            <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
              <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
            </v-layout>
          </v-img>
          <v-card-title justify-center>
            <p class="heading text-center mb-1">{{member.name}}</p>
            <a
              class="subheading text-center"
              v-if="member.twitter"
              target="_blank"
              :href="`http://www.twitter.com/${member.twitter}`"
            >
              <i class="fab fa-twitter"></i>
              @{{member.twitter}}
            </a>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    members: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
a,
p {
  width: 100%;
}

.subheading, .v-card__title {
  word-break: break-word;
}
</style>
