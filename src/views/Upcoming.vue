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
              <b-button class="toggle-button" size="lg" variant="success" @click="showGrid = !showGrid">
                {{showGrid ? 'Show calendar' : 'Show grid'}}
              </b-button>
              <transition name="fade" mode="out-in" appear>
                <vv-grid class="grid" v-if="showGrid" :events="story.content.body"></vv-grid>
                <div class="calendar full-width" v-else>
                  <calendar-view :show-date="showDate"
                                 :events="events"
                                 disablePast
                                 @show-date-change="setShowDate"
                                 @click-event="navigateToEvent"></calendar-view>
                </div>
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
  import CalendarView from 'vue-simple-calendar'
  import 'vue-simple-calendar/dist/static/css/default.css';
  import VvGrid from '../components/Grid'
  import messages from '../translations/upcoming'

  export default {
    mixins: [storyblok],
    components: {
      CalendarView,
      VvGrid,
    },
    data() {
      return {
        slug: 'upcoming',
        showDate: new Date(),
        showGrid: true,
      }
    },
    computed: {
      events() {
        if (this.story.content && this.story.content.body) {
          return this.story.content.body.map(event => ({
            startDate: event.date,
            title: event.location,
            link: event.link.cached_url,
            classes: 'conference',
          }))
        }
      }
    },
    methods: {
      setShowDate(date) {
        this.showDate = date;
      },
      navigateToEvent(event) {
        this.$router.push(event.originalEvent.link);
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style lang="scss">
  .conference {
    background-color: #b5e2cd!important;
    cursor: pointer;
    &:hover {
      background-color: #47B784!important;
      color: #fff!important;
    }
  }
  .toggle-button {
    margin-bottom: 20px;
  }

  .full-width {
    width: 100%;
  }

  .calendar-view {
    .header {
      .nav {
        button {
          cursor: pointer;
          &:focus {
            outline: none;
          }
          &:hover {
            background-color: #b5e2cd;
            &:disabled {
              background-color: #f7f7f7;
              cursor: default;
            }
          }
        }
      }
    }
    .weeks {
      .day.today {
        background-color: lightblue;
      }
    }
  }

  .calendar {
    padding-bottom: 40px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }

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
    .conference {
      visibility: hidden;
      position: relative;
      margin-top: -4px;
      height: 28px;
      &:before {
        position: absolute;
        visibility: visible;
        content: '';
        height: 26px;
        width: 26px;
        top: 0;
        left: 2px;
        -webkit-border-radius: 26px;
        -moz-border-radius: 26px;
        border-radius: 26px;
        background-image: url('../assets/fox-mini.png');
        background-size: cover;
      }
    }
    .calendar-view {
      .header {
        .nav {
          button {
            cursor: pointer;
            &:focus {
              outline: none;
            }
            &:hover {
              background-color: buttonface;
              &:disabled {
                background-color: #f7f7f7;
                cursor: default;
              }
            }
          }
        }
      }
    }
  }
</style>