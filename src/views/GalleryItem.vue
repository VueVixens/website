<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2">
        <article class="card">
          <div class="card-body">
            <h4 class="title">
              <router-link to="/gallery">{{ $t("title") }}</router-link>
              >
              {{$route.params.item}}
            </h4>
            <b-row>
              <b-col lg="4" md="6" sm="6" cols="12"
                     v-for="(photo, index) in photos"
                     :key="index">
                <figure v-editable="photo"
                        v-b-modal.image
                        @click="slide = index"
                        class="photo-item">
                  <div class="photo-item-background"
                       :style="{backgroundImage: `url(${photo.img})`}"></div>
                </figure>
              </b-col>
            </b-row>
            <b-modal id="image" size="lg" hide-footer hide-header centered>
              <b-carousel id="carousel1"
                          controls
                          indicators
                          background="#ababab"
                          img-width="1024"
                          img-height="768"
                          v-model="slide"
                          @sliding-start="onSlideStart"
                          @sliding-end="onSlideEnd">
                <b-carousel-slide v-for="(photo, index) in photos"
                                  :key="index" :img-src="photo.img">
                </b-carousel-slide>
              </b-carousel>
            </b-modal>
          </div>
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import messages from '../translations/gallery'
  export default {
    mixins: [storyblok],
    computed: {
      photos() {
        if (this.story.content) {
          return this.story.content.body
        }
      },
      slug() {
        return `galleries/${this.$route.params.item}`;
      }
    },
    data () {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart (slide) {
        this.sliding = true
      },
      onSlideEnd (slide) {
        this.sliding = false
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style lang="scss" scoped>
  .photo-item {
    position: relative;
    width: 100%;
    height: 200px;
    background-color: lightgray;
    text-align: center;
    cursor: pointer;
    .photo-item-background {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-size: cover;
    }
  }
</style>