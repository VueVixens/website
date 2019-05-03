<template>
  <div>
    <!-- hero -->
    <v-parallax class="vv-day-hero" :src="event.headerImage">
      <v-container fill-height>
        <v-layout align-center justify-end column wrap>
          <h1 class="primary--text font-lato">{{event.city}}</h1>
          <h2 class="primary--text font-lato">{{event.date}}</h2>
          <p class="mb-0 font-weight-medium">
            <i class="fas fa-map-marker-alt mr-2"></i>{{event.venue}}
          </p>
          <div class="mt-3 mb-5">
            <v-btn
              v-if="event.registration"
              color="primary darken-1"
              :to="`/form/${$route.params.event}`"
            >
              Registration
            </v-btn>
            <v-btn
              v-if="event.callForSpeakersUrl"
              :href="event.callForSpeakersUrl"
              color="primary darken-1"
            >
              Call for speakers
            </v-btn>
          </div>
        </v-layout>
      </v-container>
    </v-parallax>
    <!-- end hero -->
    <!-- info section -->
    <v-container pa-5>
      <h1 class="text-xs-center ma-3 primary--text font-lato">
        {{event.title}}
      </h1>
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 px-5 d-flex align-center v-html="toHtml(event.description)">
        </v-flex>
        <v-flex xs12 sm6 px-5 v-if="event.schedule">
          <h3 class="headline-1 mb-2">Schedule</h3>
          <ul class="pa-0">
            <li
              v-for="event in event.schedule"
              v-bind:key="event.activity">
              <span class="font-weight-medium">{{event.time}}</span> {{event.activity}}
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <!-- end info section -->
    <!-- speakers section -->
    <div v-if="event.speakers" class="secondary darken-2">
      <v-container pa-5>
        <h1 class="text-xs-center ma-3 white--text font-lato">Speakers</h1>
        <v-layout wrap justify-space-around>
          <v-flex xs12 sm3 md2 pa-2
            v-for="speaker in event.speakers"
            v-bind:key="speaker.name">
            <v-card>
              <v-img height="150px"
                :alt="`${speaker.name} picture`"
                :src="speaker.picture"
                class="grey lighten-2">
                <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
                </v-layout>
              </v-img>
              <v-card-title justify-center>
                <p class="heading text-xs-center mb-1">{{speaker.name}}</p>
                <a class="subheading text-xs-center"
                    v-if="speaker.twitter" :href="'http://www.twitter.com/' + speaker.twitter">
                  <i class="fab fa-twitter"></i> @{{speaker.twitter}}
                </a>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <!-- end speakers section -->
    <!-- mentors section -->
    <v-container v-if="event.mentors" pa-5>
      <h1 class="text-xs-center ma-3 primary--text font-lato">Mentors</h1>
      <v-layout wrap justify-space-around>
        <v-flex xs12 sm3 md2 pa-2
          v-for="mentor in event.mentors"
          v-bind:key="mentor.name">
          <v-card>
            <v-img height="150px"
              :alt="`${mentor.name} picture`"
              :src="mentor.picture"
              class="grey lighten-2">
              <v-layout slot="placeholder" fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
              </v-layout>
            </v-img>
            <v-card-title justify-center>
              <p class="heading mb-1 text-xs-center">{{mentor.name}}</p>
              <a class="subheading text-xs-center"
                  v-if="mentor.twitter" :href="'http://www.twitter.com/' + mentor.twitter">
                <i class="fab fa-twitter"></i> @{{mentor.twitter}}
              </a>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <!-- end mentors section -->
    <!-- sponsors section -->
    <v-container v-if="event.sponsors" pa-5>
      <h1 class="text-xs-center primary--text font-lato ma-3">
        Sponsors
      </h1>
      <div v-if="event.sponsors.categories">
        <v-container
          v-for="category in event.sponsors.list"
          v-bind:key="category.name">
          <h2 class="headline text-xs-center ma-2">
            {{category.name}}
          </h2>
          <v-layout row wrap justify-space-around>
            <v-flex xs12 sm4 md3
              v-for="sponsor in category.value"
              v-bind:key="sponsor.name">
              <div class="vv-day-sponsor px-4 mb-3">
                <a :href="sponsor.link">
                  <img :src="sponsor.logo"
                    :alt="`${sponsor.name} logo`"
                    class="vv-day-sponsor-logo">
                </a>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
      <div v-else>
        <v-layout row wrap justify-space-around>
          <v-flex xs12 sm3
            v-for="sponsor in event.sponsors.value"
            v-bind:key="sponsor.name">
            <div class="vv-day-sponsor px-4 mb-3">
              <a :href="sponsor.link" target="_blank">
                <img :src="sponsor.logo" class="vv-day-sponsor-logo">
              </a>
            </div>
          </v-flex>
        </v-layout>
      </div>
    </v-container>
    <!-- end sponsors section -->
  </div>
</template>

<script>
import { markdown } from 'markdown';

export default {
  data() {
    return {
      event: {
        registration: true,
        callForSpeakersUrl: 'http://bit.ly/vuevixensco-cfp',
        venue: 'Auditorio Ruta N - Calle 67 #52-20',
        city: 'Medellin - Colombia',
        date: 'June 29th 2019',
        headerImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Metro_de_Medell%C3%ADn%2C_Colombia.jpg/1599px-Metro_de_Medell%C3%ADn%2C_Colombia.jpg',
        title: 'Vue Vixens Day Medellin',
        description: 'Incididunt ut amet [proident](test) et sit dolore. Irure aliqua eiusmod amet nisi consectetur duis Lorem consequat. Esse in exercitation tempor amet labore. Esse minim et exercitation dolore sit tempor eiusmod. Duis dolore irure mollit enim amet. Qui fugiat mollit et voluptate nisi ad nostrud adipisicing cupidatat adipisicing sit sint est. Deserunt non dolore exercitation laborum voluptate sint proident sit pariatur in nostrud eu.',
        schedule: [{
          time: '08:20 - 09:00',
          activity: 'Registration'
        },{
          time: '09:00 - 09:15',
          activity: 'Welcome'
        },{
          time: '09:15 - 10:30',
          activity: 'Talks'
        },{
          time: '10:30 - 10:45',
          activity: 'Break'
        },{
          time: '10:45 - 12:00',
          activity: 'Talks'
        },{
          time: '12:00 - 13:00',
          activity: 'Lunch'
        },{
          time: '13:00 - 14:50',
          activity: 'Workshop'
        },{
          time: '14:50 - 15:10',
          activity: 'Break'
        },{
          time: '15:10 - 16:50',
          activity: 'Workshop'
        },{
          time: '16:50 - 17:00',
          activity: 'Closing'
        }],
        mentors: [{
          picture: 'https://via.placeholder.com/150',
          name: 'Ea in esse esse culpa',
          twitter: 'loremIpsum',
        },{
          picture: 'https://via.placeholder.com/150',
          name: 'Ea in esse esse culpa',
          twitter: 'loremIpsum',
        },{
          picture: 'https://via.placeholder.com/150',
          name: 'Ea in esse esse culpa',
          twitter: 'loremIpsum',
        },{
          picture: 'https://via.placeholder.com/150',
          name: 'Ea in esse esse culpa',
          twitter: 'loremIpsum',
        },{
          picture: 'https://via.placeholder.com/150',
          name: 'Ea in esse esse culpa',
          twitter: 'loremIpsum',
        }],
        sponsors: {
          categories: true,
          value: [{
            name: 'lorem ipsum',
            logo: 'https://via.placeholder.com/150',
            link: ''
          },{
            name: 'lorem ipsum',
            logo: 'https://via.placeholder.com/150',
            link: '#'
          },{
            name: 'lorem ipsum',
            logo: 'https://via.placeholder.com/150',
            link: '#'
          }],
          list: [{
          name: 'Gold',
          value: [{
            name: 'Ruta N',
            logo: 'https://www.rutanmedellin.org/images/logo.svg/',
            link: 'https://www.rutanmedellin.org/'
          },{
            name: 'Monoku',
            logo: 'https://cdn-images-1.medium.com/max/1600/1*8efy7GSRHiI_UoypVgn9LA.jpeg',
            link: 'https://monoku.com/'
          }]
        },{
          name: 'Silver',
          value: [{
            name: 'Huge inc',
            logo: 'https://pbs.twimg.com/profile_images/428773574132772864/9nxNTbHA_400x400.jpeg',
            link: 'https://www.hugeinc.com/'
          }]
        }]
        }
      }
    }
  },
  methods: {
    toHtml(text) {
      return markdown.toHTML(text);
    }
  }
}
</script>

<style lang="scss">
.vv-day-hero img {
  filter: brightness(50%);
}
</style>

<style lang="scss" scoped>
.vv-day {
  &-hero {
    text-align: center;
  }

  &-sponsor {
    display: flex;
    justify-content: center;

    &-logo {
      max-width: 100%;
    }
  }
}
</style>
