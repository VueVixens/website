<template>
  <b-container fluid>
    <b-row>
      <b-col class="article">
        <h1>{{ msg }}</h1>
        <transition name="fade-scale" appear>
          <img src="../assets/logo.png">
        </transition>
        <h2>{{ tagline }}</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="article spotlight">
        <h2><b>Upcoming Events</b></h2>
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
            <h4 class="title">Join a Skulk</h4>
            <p class="card-text">
              Want to learn Vue.js? Join a Vue Vixen Skulk for free!
            </p>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'about'}" class="card darkened">
          <img src="../assets/one-student.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">The Program</h4>
            <p class="card-text">
              Students and Mentors, learn more about our program.
            </p>
          </div>
        </router-link>
      </b-col>
      <b-col md="4">
        <router-link tag="article" :to="{ name: 'request'}" class="card darkened">
          <img src="../assets/conference-crowd.jpg" class="card-img-top"/>
          <div class="card-body">
            <h4 class="title">Request</h4>
            <p class="card-text">
              Conference organizers, register to host a workshop.
            </p>
          </div>
        </router-link>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="spotlight patreon">
        <b-row>
          <b-col md="6" sm="12">
            Do you want to support us? We have a Patreon account!
          </b-col>
          <b-col class="align-right" md="6" sm="12">
            <b-button href="https://www.patreon.com/vuevixens/overview"
                      target="_blank"
                      variant="danger">
              <img src="../assets/patreon.png" alt="Patreon logo">
              Become a Patron
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from '../mixins/storyblok'
  export default {
    mixins: [storyblok],
    data() {
      return {
        msg: 'Welcome to Vue Vixens!',
        tagline: 'Vue Vixens are foxy people who identify as women and who want to learn Vue.js to make websites and mobile apps',
        slug: 'home',
      }
    },
  }
</script>

<style lang="scss" scoped>

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

  .patreon {
    margin-bottom: 0;
    font-size: 22px;
    .col-md-6 {
      display: flex;
      align-items: center;
      padding: 0 40px;
      &.align-right {
        justify-content: flex-end;
      }
    }
    .btn {
      background-color: #f96854;
      font-size: 22px;
      img {
        max-width: 30px;
        margin-top: -5px;
      }
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
    .patreon {
      font-size: 22px;
      .col-md-6 {
        padding: 0 30px;
        justify-content: center;
        text-align: center;
        &.align-right {
          justify-content: center;
          .btn {
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>