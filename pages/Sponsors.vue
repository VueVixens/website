<template>
  <v-layout
    class="vv-container"
    fill-height
  >
    <v-container class="indexed">
      <v-flex
        xs12
        class="text-xs-center"
      >
        <h2 class="vv-heading font-lato text-xs-center">{{$t('title')}}</h2>
        <i18n
          path="subtitle"
          class="vv-content title"
          tag="p"
        >
          <a
            href="mailto:info@vuevixens.org"
            place="mail"
          >
            {{
            $t('mailLink')
            }}
          </a>
          <a
            href="https://spark.adobe.com/page/FFczmvHR6Brpu/"
            place="presskit"
            target="blank"
          >{{$t('presskitLink')}}</a>
        </i18n>
      </v-flex>
      <v-container
        grid-list-lg
        v-if="!!story.content"
      >

        <h3 class="vv-subheading font-lato text-xs-center">Platinum sponsors</h3>
        <v-layout wrap>
          <v-flex
            xs12
            sm6
            lg4
            v-for="sponsor in story.content.body"
            :key="sponsor.name"
          >
            <v-card height="100%">
              <img
                :src="sponsor.img"
                :alt="`${sponsor.name} Logo`"
                :aria-label="sponsor.name"
                :title="sponsor.name"
              >
              <v-card-title justify-center>
                <!-- TODO: conditionally apply sponsor class / text -->
                <div class="sponsor-type gold"></div>
                <p class="text-xs-center">{{ sponsor.tagline }}</p>
                <p class="text-xs-center">{{ sponsor.description }}</p>
              </v-card-title>
              <a
                :href="sponsor.website.url"
                class="d-block text-xs-center"
              >
                <i
                  class="fa fa-link"
                  aria-hidden="true"
                ></i>
                {{ sponsor.website.url }}
              </a>

            </v-card>
          </v-flex>
        </v-layout>

        <!--
          TODO: conditionally apply sponsor class / text to 'sponsor-type' div and separate tiers
          
          <h3 class="vv-subheading font-lato text-xs-center">Gold sponsors</h3>
        <v-layout wrap>
          <v-flex
            xs12
            sm6
            lg4
            v-for="sponsor in story.content.body"
            :key="sponsor.name"
          >
            <v-card height="100%">
              <img
                :src="sponsor.img"
                :alt="`${sponsor.name} Logo`"
                :aria-label="sponsor.name"
                :title="sponsor.name"
              >
              <v-card-title justify-center>
                <div class="sponsor-type gold"></div>
                <p class="text-xs-center">{{ sponsor.tagline }}</p>
                <p class="text-xs-center">{{ sponsor.description }}</p>
              </v-card-title>
              <a
                :href="sponsor.website.url"
                class="d-block text-xs-center"
              >
                <i
                  class="fa fa-link"
                  aria-hidden="true"
                ></i>
                {{ sponsor.website.url }}
              </a>

            </v-card>
          </v-flex>
        </v-layout>-->
      </v-container>
    </v-container>
  </v-layout>
</template>

<script>
import storyblok from "../mixins/storyblok";
import messages from "../assets/translations/sponsors";
export default {
  mixins: [storyblok],
  i18n: {
    messages
  }
};
</script>

<style scoped lang="scss">
h3 {
  width: 100%;
  padding-bottom: 10px;
}

a {
  padding-bottom: 30px;
  text-decoration: none;
}

img {
  width: 100%;
  max-width: 100%;
}

.container {
  &.grid-list-lg {
    .layout {
      .flex {
        padding: 16px;
      }

      &:not(:only-child) {
        margin: auto -16px;
      }
    }
  }
}

.layout.wrap {
  & + .vv-subheading {
    margin-top: 40px;
  }
}

.vv-subheading {
  margin-bottom: 15px;
}

.v-card {
  border-radius: 0;
  padding: 35px 20px;
  text-align: center;
  -moz-box-shadow: 0 0 5px #d4d4d4;
  -webkit-box-shadow: 0 0 5px#d4d4d4;
  box-shadow: 0 0 5px #d4d4d4;

  img {
    max-width: 200px;
  }
}

.v-card__title {
  padding-bottom: 0;
}

// TODO: update urls to final badges
$sponsorTypes: ("gold", "/assets/images/goldbadge-temp.png"),
  ("silver", "/assets/images/goldbadge-temp.png"),
  ("bronze", "/assets/images/goldbadge-temp.png");

.sponsor-type {
  width: 50px;
  height: 60px;
  display: block;
  position: absolute;
  top: -15px;
  left: -15px;

  @each $url in $sponsorTypes {
    &.#{nth($url,1)} {
      background: url(nth($url, 2)) no-repeat;
      background-size: contain;
    }
  }

  &.silver {
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>
