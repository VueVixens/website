<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-xs-center">
        <h2 class="vv-subheading font-lato text-xs-center">{{ $t("team") }}</h2>
      </v-flex>
      <template v-if="!!story.content">
        <v-container grid-list-lg>
          <v-layout wrap justify-center>
            <VVMember v-for="member in staff" :member="member" :key="member.name"/>
          </v-layout>
        </v-container>
        <v-flex xs12 class="text-xs-center">
          <h2 class="vv-subheading font-lato text-xs-center">{{ $t("board") }}</h2>
        </v-flex>
        <v-container grid-list-lg>
          <v-layout wrap justify-center>
            <VVMember v-for="member in advisory" :member="member" :key="member.name"/>
          </v-layout>
        </v-container>
        <v-flex xs12 class="text-xs-center">
          <h2 class="vv-subheading font-lato text-xs-center">{{ $t("chapter") }}</h2>
        </v-flex>
        <v-container grid-list-lg>
          <v-layout wrap justify-center>
            <v-flex xs12 sm4 lg3 v-for="member in chapterLeaders" :key="member.name">
              <v-card height="100%">
                <v-img
                  height="200px"
                  :src="member.img || '/images/fox-placeholder.jpg'"
                  class="grey lighten-2"
                >
                  <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                    <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                  </v-layout>
                </v-img>
                <v-card-title justify-center>
                  <h3 class="d-block text-xs-center">{{member.name}}</h3>
                  <h4
                    class="d-block text-xs-center primary--text text--darken-2"
                  >{{member.title}} Chapter Leader</h4>
                  <a
                    class="text-xs-center"
                    v-if="member.twitter"
                    :href="'http://www.twitter.com/' + member.twitter"
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
    </v-container>
  </v-layout>
</template>

<script>
import storyblok from "../mixins/storyblok";
import messages from "../assets/translations/team";
import VVMember from "../components/Member.vue";
export default {
  mixins: [storyblok],
  components: {
    VVMember
  },
  i18n: {
    messages
  },
  computed: {
    staff() {
      if (this.story.content.body) {
        return this.story.content.body.filter(item => item.staff);
      }
    },
    chapterLeaders() {
      if (this.story.content.body) {
        return this.story.content.body.filter(item => item.chapter);
      }
    },
    advisory() {
      if (this.story.content.body) {
        return this.story.content.body.filter(
          item => !item.staff && !item.chapter
        );
      }
    }
  },
  head() {
    return {
      title: `Team`,
      meta: [
        { hid: 'description', name: 'description', content: `The Vue Vixens foxy team, advisory board, and chapter leaders` }
      ]
    }
  }
};
</script>

<style scoped>
h3,
h4 {
  width: 100%;
  padding-bottom: 10px;
}
p {
  font-size: 16px;
}
a {
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
