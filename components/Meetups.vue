<template>
  <div class="vv-meetups">
      <v-layout align-center justify-center wrap>
        <v-flex xs12 text-xs-center>
          <h2 class="vv-subheading font-lato secondary--text text--darken-2">{{ title }} </h2>
        </v-flex>
        <div v-if="loading">
          {{ loadingMessage }}
        </div>
        <div v-else-if="meetups.length !== 0 && !loading">
                  <v-list class="meetup-list container" two-line>
         
              <v-list-tile
              :key="meetup.name"
              :href="meetup.link"
               v-for="meetup in meetups"
              class="meetup-item"
            >
            <v-list-tile-avatar class="meetup-item__avatar">
                <img src="~/assets/images/logo.png">
              </v-list-tile-avatar>
                        <v-list-tile-content class="meetup-item__content">
                <v-list-tile-title class="meetup-item__title">{{ meetup.name }}</v-list-tile-title>
                <v-list-tile-sub-title class="meetup-item__subtitle text--primary">{{ meetup.venue.city }}</v-list-tile-sub-title>
                <v-list-tile-sub-title class="meetup-item__subtitle">{{ meetup.local_date}} {{meetup.local_time}}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-list-tile>
        
        </v-list>
        </div>
        <div v-else>
          {{ laterMessage }}
        </div>
      </v-layout>

  </div>
</template>

<script>
//import messages from '../assets/translations/announcements'// TODO
import VVGrid from "../components/Grid";
export default {
  props: [],
  data: () => {
    return {
      title: "Meetups",
      loading: true,
      loadingMessage: "Checking for meetups...",
      laterMessage: "No meetups found, check back later?",
      meetups: []
    };
  },
  components: {},
  i18n: {
    //messages //TODO
  },
  created() {
    const ip = this.$axios.$get("/meetups").then(res => {
      this.meetups = res;
      this.loading = false;
    });
  }
};
/**
 

        <v-list class="meetup-list container" two-line>
         
              <v-list-tile
              :key="meetup.name"
              :href="meetup.link"
               v-for="meetup in meetups"
              class="meetup-item"
            >
            <v-list-tile-avatar class="meetup-item__avatar">
                <img src="~/assets/images/logo.png">
              </v-list-tile-avatar>
                        <v-list-tile-content class="meetup-item__content">
                <v-list-tile-title class="meetup-item__title">{{ meetup.name }}</v-list-tile-title>
                <v-list-tile-sub-title class="meetup-item__subtitle text--primary">{{ meetup.venue.city }}</v-list-tile-sub-title>
                <v-list-tile-sub-title class="meetup-item__subtitle">{{ meetup.local_date}} {{meetup.local_time}}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-list-tile>
        
        </v-list>

 */
</script>

<style scoped lang="scss">
.meetup-list {
  padding: 24px 30px;
  width: 100%;
  max-width: 600px;
  margin: 24px auto;
}

.meetup-list > div:not(:first-child) {
  margin-top: 20px;
}
.meetup-item__avatar {
  .v-avatar {
    padding: 2px;
    border: 1px solid #c8553c;
    background: lighten(#c8553c, 30%);
  }
  img {
  }
}
.meetup-item__content {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
}

.meetup-item__title {
  font-size: 22px;
  flex-basis: 100%;
  font-weight: 700;
}
.meetup-item__subtitle {
  flex-basis: auto;
  width: auto;
  font-size: 18px;
  margin-right: 1rem;
}
.meetup-item__subtitle:not(:last-child) {
  margin-right: 1rem;
}
</style>
