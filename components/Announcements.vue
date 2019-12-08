<template>
  <div class="vv-announcements">
    <v-container fill-height>
      <v-layout align-center justify-center wrap>
        <v-flex xs12 text-center>
          <h2 class="vv-subheading font-lato secondary--text text--darken-2">{{$t('eventsTitle')}}</h2>
        </v-flex>
        <VVGrid :events="announcements"/>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import messages from "../assets/translations/announcements";
import VVGrid from "../components/Grid";
export default {
  props: ["announcements"],
  data() {
    return {
      gradient: "to top, #fff, rgba(4,30,48, 0.3)"
    };
  },
  components: {
    VVGrid
  },
  i18n: {
    messages
  }
};
</script>

<style scoped lang="scss">
.vv-announcements {
  background: url("../assets/images/jumbo.png");
  background-size: contain;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, #fff, #fff 27%, rgba(4, 30, 48, 0.3));
  }
}

.vv-link {
  font-size: 24px;
  text-decoration: none;
}

.vv-subheading {
  position: relative;
  z-index: 3;
  text-shadow: 2px 2px 0px #bababa;
}

@media (min-width: 961px) {
  .vv-link:hover {
    text-shadow: 0 0 8px #47b784;
  }
}

@media (max-width: 960px) {
  .vv-announcements {
    padding: 10px 0;
  }

  .vv-link {
    font-size: 20px;
  }
}
</style>
