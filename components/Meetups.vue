<template>
  <div class="vv-meetups">
    <v-container fill-height>
      <v-layout align-center justify-center wrap>
        <v-flex xs12 text-xs-center>
          <h2 class="vv-subheading font-lato secondary--text text--darken-2">{{ title }} </h2>
        </v-flex>
        <div v-if="loading">
          {{ loadingMessage }}
        </div>
        <v-container grid-list-lg v-else-if="meetups.length !== 0 && !loading" >
          <v-layout wrap>
        <v-flex xs12 sm4 md3  :key="meetup.name" v-for="meetup in meetups" >
          <v-card class="meetup-item" hover  nuxt
              :href="meetup.link"
              target="_blank"
          >
            <v-layout fill-height align-center justify-center ma-0>
                <v-flex xs12  class="meetup-item__content">
                    <h3 class="headline meetup-item__title">{{meetup.name}}</h3>
                <span class="meetup-item__subtitle meetup-item__subtitle--city text--primary">{{ meetup.venue.city }}</span>
                <span class="meetup-item__subtitle meetup-item__subtitle--date ">{{ meetup.local_date  | moment('MMM Do')}}</span>
                <span class="meetup-item__subtitle meetup-item__subtitle--time ">@{{meetup.local_time}}</span>
                </v-flex>
              </v-layout>
          </v-card>
        </v-flex>
          </v-layout>
        </v-container>

        <div v-else>
          {{ laterMessage }}
        </div>
      </v-layout>
    </v-container>
  </div>
</template>
<script>

import VVGrid from "../components/Grid";
export default {
  props: ["title", "loadingMessage", "laterMessage"],
  data: () => {
    return {
      loading: true,
      meetups: [],
    };
  },
  components: {},
  created() {
    const reqMeetups = this.$axios.$get("/meetups").then(res => {
      this.meetups = res;
      this.loading = false;
    });
  }
};
</script>

<style scoped lang="scss">


.meetup-item{
  padding: 20px;
}
.meetup-item__title {
  flex-basis: 100%;
  font-size: 22px;
  flex-basis: 100%;
  font-weight: 700;
}
.meetup-item__subtitle {
  flex-basis: auto;
  display: block;
  font-size: 18px;
  &--city{
    flex-basis: 100%;
    font-weight: bold;
  }
  &--date, &--time {
    display: block;
    margin-top: auto;
  }
  &--time {
    align-self: flex-end;
  }
}
.meetup-item__content{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
