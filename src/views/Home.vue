<template>
  <b-container fluid>
    <b-row>
      <b-col class="article">
        <h1>{{ $t("title.msg") }}</h1>
        <transition name="fade-scale" appear>
          <img src="../assets/logo.png">
        </transition>
        <h2>{{ $t("title.tagline") }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="article spotlight">
        <h2><b>{{ $t("eventsTitle") }}</b></h2>
        <transition name="fade" appear>
          <b-row v-if="!!story.content && !!story.content.body">
            <b-col class="mx-auto" sm="auto" v-for="item in story.content.body[0].columns" :key="item.name">
              <b-button variant="link lg"
                        v-editable="item"
                        :to="item.url.cached_url">{{item.name}}</b-button>
            </b-col>
          </b-row>
        </transition>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'upcoming'}" class="card darkened">
          <img src="../assets/fox.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">{{ $t("skulk.title") }}</h4>
            <p class="card-text">
              {{ $t("skulk.content") }}
            </p>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'about'}" class="card darkened">
          <img src="../assets/one-student.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">{{ $t("program.title") }}</h4>
            <p class="card-text">
              {{ $t("program.content") }}
            </p>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'request'}" class="card darkened">
          <img src="../assets/conference-crowd.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">{{ $t("request.title") }}</h4>
            <p class="card-text">
              {{ $t("request.content") }}
            </p>
          </div>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  import messages from '../translations/home';
  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'home',
      }
    },
    i18n: {
      messages,
    }
  }
</script>

<style lang="scss" scoped>
  .card {
    height: 100%;
  }

  .spotlight {
    background-color: #47B784;
    color: white;
    padding: 10px;
    margin: 10px 0px;
  }

  .fade-scale-enter-active, .fade-scale-leave-active {
    transition: all 1.5s;
    transform: scale(1)
  }
  .fade-scale-enter, .fade-scale-leave-to {
    opacity: 0;
    transform: scale(0.7)
  }

  .btn-link {
    font-size: 28px !important;
    color: #235b42 !important;
    &:hover, &:focus, &:active {
      text-decoration: none;
      color: #fff !important;
      text-shadow: 1px 1px 2px #235b42;
    }
  }

  @media (max-width: 768px) {
    .btn-link {
      font-size: 24px !important;
      color: #fff !important;
      white-space: normal;
      &:hover, &:focus, &:active {
        text-decoration: none;
        text-shadow: none;
      }
    }
  }
</style>