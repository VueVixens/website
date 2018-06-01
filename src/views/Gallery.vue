<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2">
        <article class="card upcoming-card">
          <div class="card-body">
            <h4 class="title">{{ $t("title") }}</h4>
            <p class="card-text">
              {{ $t("subtitle") }}
            </p>
            <div class="full-width" v-if="!!story.content && !!story.content.body" align="center">
              <transition name="fade" mode="out-in" appear>
                <vv-grid class="grid" :events="story.content.body"></vv-grid>
              </transition>
            </div>
          </div>
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import VvGrid from '../components/Grid'
  import messages from '../translations/gallery'

  export default {
    mixins: [storyblok],
    components: {
      VvGrid,
    },
    data() {
      return {
        slug: 'gallery',
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style lang="scss" scoped>

  @media (max-width: 768px) {
    .upcoming-card {
      .card-body {
        padding: 0;
      }
      .title, .card-text, .grid {
        padding: 0 1.25rem;
      }
      .title {
        padding-top: 1.25rem;
      }
    }
  }
</style>