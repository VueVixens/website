<template>
  <v-container grid-list-lg>
    <v-layout wrap>
      <v-flex xs12 sm4 md3 v-for="(event, index) in events" :key="`${event.name}-${index}`">
        <v-card
          v-if="event.link.linktype == 'cached_url'"
          class="vv-card"
          hover
          :to="event.link.cached_url"
          nuxt
        >
          <client-only>
            <v-img class="white--text vv-card-image grey lighten-2" height="200px" :src="event.img">
              <v-layout fill-height align-center justify-center ma-0>
                <v-flex xs12 d-flex align-center justify-center class="event-name">
                  <div>
                    <h3 class="headline">{{event.location}}</h3>
                    <p class="title">{{event.date | moment('MMM Do')}}</p>
                  </div>
                </v-flex>
              </v-layout>
            </v-img>
          </client-only>
        </v-card>
        <v-card v-else class="vv-card" hover :href="event.link.cached_url" nuxt>
          <client-only>
            <v-img class="white--text vv-card-image grey lighten-2" height="200px" :src="event.img">
              <v-layout fill-height align-center justify-center ma-0>
                <v-flex xs12 d-flex align-center justify-center class="event-name">
                  <div>
                    <h3 class="headline">{{event.location}}</h3>
                    <p class="title">{{event.date | moment('MMM Do')}}</p>
                  </div>
                </v-flex>
              </v-layout>
            </v-img>
          </client-only>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ["events"]
};
</script>

<style scoped lang="scss">
.vv-card {
  .v-image {
    &:after {
      position: absolute;
      content: "";
      z-index: 1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.6);
      opacity: 1;
      transition: 0.3s opacity;
    }
  }

  &:hover {
    &:before {
      opacity: 0.4;
    }
  }

  .headline,
  .subheading {
    width: 100%;
  }

  .event-name {
    z-index: 2;
    flex-wrap: wrap;
    text-align: center;
    p {
      margin: 0;
    }
  }
}
</style>
