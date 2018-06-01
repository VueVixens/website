<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2">
        <h3 class="title text-center">{{ $t("title") }}</h3>
        <h4 class="title text-center">{{ $t("subtitle") }}</h4>
        <b-row v-if="!!story.content && !!story.content.body">
          <b-col md="6" v-for="sponsor in story.content.body"
                 :key="sponsor.name">
            <article class="card" v-editable="sponsor">
              <img :src="sponsor.img"
                   class="card-img-top"/>
              <div class="card-body">
                <h4 class="title">{{sponsor.name}}</h4>
                <p class="card-text">
                  {{sponsor.tagline}}
                </p> 
                <p class="card-text">
                  {{sponsor.description}}
                </p>        
                <p v-if="sponsor.website.url">
                  <i class="fas fa-link"></i>
                  <a class="link-green" :href="sponsor.website.url">{{sponsor.website.url}}</a>
                </p>
              </div>
            </article>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from '../mixins/storyblok';
  import messages from '../translations/sponsors'
  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'sponsors',
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style scoped>
  .title {
    padding: 20px 0
  }

  .card {
    height: 100%;
  }
</style>
