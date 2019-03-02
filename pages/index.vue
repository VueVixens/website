<template>
  <div>
    <v-parallax dark class="grey darken-2" src="/images/fox-bg.jpg">
      <v-container fill-height>
        <v-layout align-center row wrap justify-space-between>
          <v-flex xs12 sm12 md4 class="text-xs-center" order-md2>
            <img class="vv-logo" src="~/assets/images/logo.png" alt="VueVixens logo">
          </v-flex>
          <v-flex xs12 sm12 md7 order-md1>
            <h1 class="vv-heading font-lato text-xs-center text-md-left">{{$t('heading.title')}}</h1>
            <h2
              class="vv-subheading font-lato text-xs-center text-md-left"
            >{{$t('heading.description')}}</h2>
            <v-flex class="vv-cta">
              <v-btn
                href="https://vuevixens.github.io/docs/workshop/"
                target="_blank"
                color="accent darken-1"
              >{{$t('heading.workshops')}}</v-btn>
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
    <VVAnnouncements v-if="announcements && announcements.length" :announcements="announcements"/>
    <VVMeetups title="Meetups" loadingMessage="Checking for meetups..." laterMessage="No meetups found, check back later?"/>
  </div>
</template>

<script>
import storyblok from "../mixins/storyblok";
import messages from "../assets/translations/home";
import VVAnnouncements from "../components/Announcements";
import VVMeetups from "../components/Meetups";

export default {
  mixins: [storyblok],
  components: {
    VVAnnouncements,
    VVMeetups
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

.vv-patreon-logo {
  max-width: 22px;
  margin-right: 5px;
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
