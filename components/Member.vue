<template>
  <v-flex xs12 sm6 lg4>
    <v-card class="vv-card" height="100%">
      <v-img
        :height="size ? size : '400px'"
        :src="member.img || '/images/fox-placeholder.jpg'"
        class="grey lighten-2"
      >
        <v-layout
          slot="placeholder"
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular
            indeterminate
            color="grey darken-5"
          ></v-progress-circular>
        </v-layout>
      </v-img>
      <v-card-title justify-center>
        <h3 class="teammate--name d-block text-center">{{ member.name }}</h3>
        <h4
          v-if="memberType !== 'chapterLeader'"
          class="teammate--title d-block text-center"
        >
          {{ member.title }}
        </h4>
        <div class="teammate--links">
          <a
            class="text-center"
            v-if="member.twitter"
            :href="'http://www.twitter.com/' + member.twitter"
          >
            <i class="fab fa-twitter"></i>
            @{{ member.twitter }}
          </a>
          <a
            class="text-center"
            v-if="memberType !== 'chapterLeader' && member.website.url"
            :href="member.website.url"
          >
            <i class="fas fa-link"></i>
            {{ member.website.url }}
          </a>
        </div>
        <p v-if="memberType !== 'chapterLeader'" class="text-center">
          {{ member.bio }}
        </p>
      </v-card-title>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true,
    },
    memberType: {
      type: String,
    },
    size: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
h3,
h4 {
  width: 100%;
}
p {
  font-size: 16px;
}
a {
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.teammate {
  &--title {
    font-size: 18px;
  }

  &--links {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 0 10px;

    a {
      padding: 0;
    }
  }
}
</style>
