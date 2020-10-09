<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="indexed" v-if="!!story.content" grid-list-md>
      <v-card
        class="article-card"
        hover
        :href="article.link.url"
        target="_blank"
        raised
        v-for="article in story.content.body"
        :key="article.title"
      >
        <v-card-title>
          <h3 class="d-block text-center">{{article.title}}</h3>
          <p class="primary--text text--darken-1">
            <em>{{article.author}}</em>
          </p>
          <p>{{article.description}}</p>
        </v-card-title>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
import storyblok from "../mixins/storyblok";
export default {
  mixins: [storyblok]
};
</script>

<style scoped>
.article-card {
  margin-bottom: 15px;
}

h3,
p {
  width: 100%;
}
</style>
