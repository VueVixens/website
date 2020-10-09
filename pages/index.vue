<template>
  <div>
    <v-parallax dark src="/images/bg1.jpg">
      <v-container fill-height>
        <v-layout align-center row wrap justify-space-between>
          <v-flex xs12 sm12 md4 class="text-center" order-md2>
            <img class="vv-logo" src="~/assets/images/ff-logo.png" alt="Front-End Foxes logo" />
          </v-flex>
          <v-flex xs12 sm12 md7 order-md1>
            <h1 class="vv-heading font-lato text-center text-md-left">{{$t('heading.title')}}</h1>
            <h2
              class="vv-subheading font-lato text-center text-md-left"
            >{{$t('heading.description')}}</h2>
            <v-flex class="vv-cta">
              <v-btn
                href="https://workshops.vuevixens.org/workshops/vue/"
                target="_blank"
                color="accent darken-1"
              >Vue Workshops</v-btn>
              <v-btn
                href="https://www.meetup.com/frontendfoxes"
                target="_blank"
                color="accent darken-1"
              >Meetups</v-btn>
              <v-btn
              
                href="https://www.patreon.com/vuevixens"
                target="_blank"
                color="accent darken-1"
              >Patreon</v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <div class="vv-homebox">
      <VVHomeBox />
      <VVAnnouncements v-if="announcements && announcements.length" :announcements="announcements" />
    </div>
  </div>
</template>

<script>
import storyblok from "../mixins/storyblok";
import messages from "../assets/translations/home";
import VVAnnouncements from "../components/Announcements";
import VVHomeBox from "../components/HomeBox";

export default {
  mixins: [storyblok],
  components: {
    VVAnnouncements,
    VVHomeBox
  },

  computed: {
    announcements() {
      return this.story.content.body;
    }
  },
  i18n: {
    messages
  },
  transition: "fade"
};
</script>

<style scoped lang="scss">
.vv-logo {
  max-width: 100%;
}

.vv-heading {
  padding-bottom: 30px;
}

.vv-cta {
  padding-top: 30px;
}

.vv-card-text {
  padding-top: 15px;
}

@media (max-width: 960px) {
  .vv-heading {
    padding-bottom: 15px;
  }

  .vv-logo {
    max-width: 240px;
  }

  .vv-cta {
    padding-top: 10px;
    text-align: center;
  }
  .vv-cta .v-btn {
    margin-top: 10px;
  }
}

@media (max-width: 420px) {
  .vv-heading {
    padding-bottom: 10px;
    line-height: 100%;
  }

  .vv-logo {
    max-width: 160px;
  }

  .vv-cta {
    padding-top: 10px;
    text-align: center;
  }
}
</style>
