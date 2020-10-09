<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-center">
        <h2 class="vv-subheading font-lato text-center">{{ $t("team") }}</h2>
      </v-flex>
      <template v-if="!!story.content">
        <v-container grid-list-lg>
          <v-layout wrap justify-center>
            <VVMember v-for="member in staff" :member="member" :key="member.name" />
          </v-layout>
        </v-container>
        <!--<v-flex xs12 class="text-center">
          <h2 class="vv-subheading font-lato text-center">{{ $t("board") }}</h2>
        </v-flex>-->
        <v-container grid-list-lg>
          <v-layout wrap justify-center>
            <VVMember v-for="member in advisory" :member="member" :key="member.name" />
          </v-layout>
        </v-container>
        <v-flex xs12 class="text-center">
          <h2 class="vv-subheading font-lato text-center">{{ $t("chapter") }}</h2>
        </v-flex>
        <v-container grid-list-lg v-for="chapter in chapterTitles" :key="chapter">
          <v-layout wrap justify-center>
            <v-flex xs12 class="text-center">
              <h3>{{ chapter }}</h3>
            </v-flex>
            <VVMember
              size="300px"
              member-type="chapterLeader"
              v-for="member in filterByChapter(chapter)"
              :key="member.name"
              :member="member"
            />
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
    chapterTitles() {
      if (this.chapterLeaders) {
        let chapters = this.chapterLeaders.map(leader => leader.title);
        return [...new Set(chapters)];
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
  methods: {
    filterByChapter(chapterName) {
      return this.chapterLeaders.filter(
        chapter => chapter.title === chapterName
      );
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
