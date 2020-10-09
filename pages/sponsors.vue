<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed">
      <v-flex xs12 class="text-center">
        <h2 class="vv-heading font-lato text-center">{{ $t('title') }}</h2>
        <i18n path="subtitle" class="vv-content title" tag="p">
          <a href="mailto:info@vuevixens.org" place="mail">{{ $t('mailLink') }}</a>
          <a
            href="https://spark.adobe.com/page/FFczmvHR6Brpu/"
            place="presskit"
            target="blank"
          >{{ $t('presskitLink') }}</a>
        </i18n>
      </v-flex>
      <v-container grid-list-lg v-if="!!story.content">
        <template v-for="category in sponsors">
          <h3
            class="vv-subheading font-lato text-center"
            :key="`category-${category.name}`"
            v-if="category.list && category.list.length"
          >{{ category.name }}</h3>
          <v-layout
            v-if="category.list && category.list.length"
            wrap
            justify-center
            :key="category.name"
            class="category-wrapper"
          >
            <v-flex xs12 sm6 lg4 v-for="sponsor in category.list" :key="sponsor.name">
              <v-card height="100%" class="vv-card">
                <img
                  :src="sponsor.img"
                  :alt="`${sponsor.name} Logo`"
                  :aria-label="sponsor.name"
                  :title="sponsor.name"
                >
                <v-card-title justify-center>
                  <div class="sponsor-type" :class="sponsor.level"></div>
                  <p class="text-center">{{ sponsor.tagline }}</p>
                  <p class="text-center">{{ sponsor.description }}</p>
                </v-card-title>
                <a :href="sponsor.website.url" class="d-block text-center">
                  <i class="fa fa-link" aria-hidden="true"></i>
                  {{ sponsor.website.url }}
                </a>
              </v-card>
            </v-flex>
          </v-layout>
        </template>
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
  },
  methods: {
    selectSponsorsByLevel(level) {
      level = level.toLowerCase();
      if (level === "partner") {
        return this.story.content.body.filter(sponsor => !sponsor.level);
      }
      return this.story.content.body.filter(sponsor => sponsor.level === level);
    }
  },
  computed: {
    sponsors() {
      const levels = ["Platinum", "Gold", "Silver", "Software", "Partner"];
      return levels.map(level => ({
        name: level === "Partner" ? "Partners" : `${level} sponsors`,
        list: this.selectSponsorsByLevel(level)
      }));
    }
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
        margin: auto 16px;
        margin-bottom: 20px;
      }
    }
  }
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

$sponsorTypes: ("platinum", "/images/plat.png"), ("gold", "/images/gold.png"),
  ("silver", "/images/silver.png"), ("software", "/images/software.png");

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
