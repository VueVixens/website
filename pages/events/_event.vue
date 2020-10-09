<template>
  <v-layout v-if="!!currentEvent" column>
    <v-parallax class="vv-day-hero" :src="currentEvent.image" height="300">
      <v-layout align-center justify-end column wrap>
        <h1 class="primary--text font-lato">{{currentEvent.city}}</h1>
        <h2 class="primary--text font-lato">{{currentEvent.date | moment('MMM Do')}}</h2>
        <p class="mt-2 mb-0 font-weight-medium">
          <i class="fas fa-map-marker-alt mr-2"></i>
          {{currentEvent.location}}
        </p>
        <div class="mt-3 mb-5">
          <v-btn
            v-if="currentEvent.registration"
            color="primary darken-1"
            :to="`/form/${$route.params.event}`"
          >Registration</v-btn>
          <v-btn
            v-if="currentEvent.registrationUrl"
            color="primary darken-1"
            :href="currentEvent.registrationUrl"
            target="_blank"
          >Registration</v-btn>
          <v-btn
            v-if="currentEvent.callForSpeakersUrl"
            :href="currentEvent.callForSpeakersUrl"
            color="primary darken-1"
            target="_blank"
          >Call for speakers</v-btn>
        </div>
      </v-layout>
    </v-parallax>
    <!-- end hero -->
    <!-- info section -->
    <v-container grid-list-xl>
      <h1 class="text-center ma-3 primary--text font-lato">{{currentEvent.title}}</h1>
      <v-layout row wrap justify-center>
        <v-flex xs12 :sm6="!!currentEvent.schedule" v-html="toHtml(currentEvent.description)"></v-flex>
        <v-flex xs12 sm6 v-if="currentEvent.schedule">
          <h3 class="headline-1 mb-2">Schedule</h3>
          <div class="schedule" v-html="toHtml(currentEvent.schedule)"></div>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- end info section -->
    <!-- speakers section -->
    <div v-if="currentEvent.speakers && currentEvent.speakers.length" class="secondary darken-2">
      <h1 class="text-center mt-3 white--text font-lato">Speakers</h1>
      <VVEventMembers :members="currentEvent.speakers"/>
    </div>
    <!-- end speakers section -->
    <!-- mentors section -->
    <template v-if="currentEvent.mentors && currentEvent.mentors.length">
      <h1 class="text-center primary--text font-lato mt-3">Mentors</h1>
      <VVEventMembers :members="currentEvent.mentors"/>
    </template>
    <!-- end mentors section -->
    <!-- sponsors section -->
    <template v-if="currentEvent.sponsors && currentEvent.sponsors.length">
      <v-divider></v-divider>
      <h1 class="text-center primary--text font-lato mt-3">Sponsors</h1>
      <v-container pa-4>
        <v-layout row wrap justify-space-around align-center>
          <v-flex xs12 sm3 v-for="sponsor in currentEvent.sponsors" :key="sponsor.name">
            <div class="vv-day-sponsor px-4 mb-3">
              <a :href="sponsor.website.url" target="_blank">
                <img :src="sponsor.img" class="vv-day-sponsor-logo">
              </a>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </template>
    <!-- end sponsors section -->
  </v-layout>
</template>

<script>
import { markdown } from "markdown";
import storyblok from "../../mixins/storyblok";
import VVEventMembers from "../../components/EventMembers.vue";

export default {
  mixins: [storyblok],
  components: {
    VVEventMembers
  },
  computed: {
    currentEvent() {
      return this.story.content;
    }
  },
  methods: {
    toHtml(text) {
      return markdown.toHTML(text);
    },
    resize(image, option) {
      const imageService = "//img2.storyblok.com/";
      const path = image.replace("//a.storyblok.com", "");
      return imageService + option + path;
    }
  }
};
</script>

<style lang="scss">
.vv-day-hero img {
  filter: brightness(35%);
}
</style>

<style scoped lang="scss">
.vv-day {
  &-hero {
    text-align: center;
  }

  &-sponsor {
    display: flex;
    justify-content: center;

    &-logo {
      max-width: 100%;
    }
  }
}

.schedule {
  >>> p {
    margin: 0;
  }
}
</style>
