<template>
  <v-app>
    <VVDrawer :showDrawer="showDrawer" @toggleDrawer="toggleDrawer($event)"/>
    <VVHeader @toggleDrawer="showDrawer = !showDrawer"/>
    <v-content class="vv-main">
      <nuxt/>
    </v-content>
    <VVFooter/>
  </v-app>
</template>

<script>
import VVHeader from "../components/Header";
import VVDrawer from "../components/Drawer";
import VVFooter from "../components/Footer";

export default {
  components: {
    VVHeader,
    VVDrawer,
    VVFooter
  },
  data() {
    return {
      showDrawer: false,
      story: {}
    };
  },
  methods: {
    toggleDrawer(event) {
      this.showDrawer = event;
    }
  }
};
</script>

<style lang="scss">
</style>
