<template>
  <div class="vv-meetups">
      <v-layout align-center justify-center wrap>
        <v-flex xs12 text-xs-center>
          <h2 class="vv-subheading font-lato secondary--text text--darken-2">{{ title }}</h2>
        </v-flex>
        <v-list class="meetup-list container" two-line>
         
              <v-list-tile
              :key="meetup.name"
              :href="meetup.link"
               v-for="meetup in meetups"
              
            >
                        <v-list-tile-content class="meetup-item">
                <v-list-tile-title class="meetup-item__title">{{ meetup.name }}</v-list-tile-title>
                <v-list-tile-sub-title class="meetup-item__subtitle text--primary">{{ meetup.venue.city }}</v-list-tile-sub-title>
                <v-list-tile-sub-title class="meetup-item__subtitle">{{ meetup.local_date}} {{meetup.local_time}}</v-list-tile-sub-title>
              </v-list-tile-content>
              </v-list-tile>
        
        </v-list>
      </v-layout>

  </div>
</template>

<script>
//import messages from '../assets/translations/announcements'// TODO
import VVGrid from "../components/Grid";
export default {
  props: [],
  data: () => {
    return {
      title: "Meetups",
      meetups: [
        {
          created: 1548434643000,
          duration: 10800000,
          id: "258390667",
          name: "VueVixens Toronto Meetup",
          date_in_series_pattern: false,
          status: "upcoming",
          time: 1551310200000,
          local_date: "2019-02-27",
          local_time: "18:30",
          updated: 1548434769000,
          utc_offset: -18000000,
          waitlist_count: 0,
          yes_rsvp_count: 10,
          venue: {
            id: 26115896,
            name: "HackerYou",
            lat: 43.64826583862305,
            lon: -79.39785766601562,
            repinned: true,
            address_1: "483 Queen St W 3rd floor",
            city: "Toronto",
            country: "ca",
            localized_country_name: "Canada",
            zip: "M5V 2A9",
            state: "ON"
          },
          group: {
            created: 1539099876000,
            name: "VueVixens",
            id: 30165574,
            join_mode: "open",
            lat: 42.36000061035156,
            lon: -71.06999969482422,
            urlname: "VueVixens",
            who: "Members",
            localized_location: "Boston, MA",
            state: "MA",
            country: "us",
            region: "en_US",
            timezone: "US/Eastern"
          },
          link: "https://www.meetup.com/VueVixens/events/258390667/",
          description:
            "<p>What can you expect from a Vue Vixens event? Well, as a student, perhaps new to the field of frontend development, you are given the opportunity to learn about Vue.js, a cool, fresh framework for building both web and mobile apps.</p> <p>You'll complete the task of building a web app and a mobile app that will teach you about the framework and programming in JavaScript. You'll also get a chance to meet and work with like-minded students and interface with leaders in the industry - our mentors are often speakers at conferences you attend.</p> <p>Vue Vixens are foxy people who identify as women and who want to learn Vue.js to make websites and mobile apps.</p> <p>***This workshop is open to those that identify as women.</p> <p>***Please bring a laptop and charger and a bottle of water.</p> ",
          visibility: "public"
        },
        {
          created: 1550414050000,
          duration: 18000000,
          id: "259037623",
          name: "Workshop Workana + Vue Vixens Argentina",
          rsvp_limit: 30,
          date_in_series_pattern: false,
          status: "upcoming",
          time: 1552743000000,
          local_date: "2019-03-16",
          local_time: "09:30",
          updated: 1550711452000,
          utc_offset: -14400000,
          waitlist_count: 0,
          yes_rsvp_count: 14,
          venue: {
            id: 26180273,
            name: "Castillo 1366",
            lat: -34.588645935058594,
            lon: -58.441017150878906,
            repinned: true,
            address_1: "Castillo 1366",
            city: "Buenos Aires",
            country: "ar",
            localized_country_name: "Argentina"
          },
          group: {
            created: 1539099876000,
            name: "VueVixens",
            id: 30165574,
            join_mode: "open",
            lat: 42.36000061035156,
            lon: -71.06999969482422,
            urlname: "VueVixens",
            who: "Members",
            localized_location: "Boston, MA",
            state: "MA",
            country: "us",
            region: "en_US",
            timezone: "US/Eastern"
          },
          link: "https://www.meetup.com/VueVixens/events/259037623/",
          description:
            "<p>WORKSHOP WORKANA + VUE VIXENS ARGENTINA</p> <p>En este encuentro vas a tener la oportunidad de aprender cómo trabajar de manera freelance profesionalmente y escuchar todo lo que tienes que saber para embarcarte en eso con la ayuda de Workana, la más grande plataforma de trabajo remoto de América Latina.<br/>Por otro lado, realizaremos un workshop en el que vas a poder hacer una web app para aprender a usar Vue.js, un novedoso y popular framework de JavaScript diseñado para crear aplicaciones.</p> <p>* Este workshop está destinado únicamente a mujeres y a quienes se identifiquen como tal *</p> <p>* Deberás traer tu propia laptop *</p> <p>* ¡Cupos limitados! (30 personas) *</p> <p>* Ingreso de 9:30 a 10:00 hs *</p> <p>¡Las esperamos!</p> ",
          visibility: "public"
        },
        {
          created: 1551274863000,
          duration: 18000000,
          id: "259326892",
          name: "VueVixens Lagos Meetup",
          rsvp_limit: 50,
          date_in_series_pattern: false,
          status: "upcoming",
          time: 1553338800000,
          local_date: "2019-03-23",
          local_time: "07:00",
          updated: 1551288037000,
          utc_offset: -14400000,
          waitlist_count: 0,
          yes_rsvp_count: 20,
          venue: {
            id: 26207386,
            name: "Andela, Epic Tower",
            lat: 6.553823947906494,
            lon: 3.3664729595184326,
            repinned: true,
            address_1: "235 Ikorodu Rd",
            city: "Lagos",
            country: "ng",
            localized_country_name: "Nigeria"
          },
          group: {
            created: 1539099876000,
            name: "VueVixens",
            id: 30165574,
            join_mode: "open",
            lat: 42.36000061035156,
            lon: -71.06999969482422,
            urlname: "VueVixens",
            who: "Members",
            localized_location: "Boston, MA",
            state: "MA",
            country: "us",
            region: "en_US",
            timezone: "US/Eastern"
          },
          link: "https://www.meetup.com/VueVixens/events/259326892/",
          description:
            "<p>For our first meetup, we will be giving an introduction to Vue.js! We will start by discussing why you would use Vue, and then we will lead an interactive workshop to get you started with writing Vue code.</p> <p>Some experience with HTML, CSS, and JavaScript is helpful but not required. Bringing a computer to follow along with the workshop will also be helpful, but you can still benefit from attending without a computer!</p> <p>Schedule:<br/>12:00-3:00 Workshop!<br/>3:00-4:30 Networking and Food</p> <p>Vue Vixens are foxy people who want to learn Vue.js to make websites and mobile apps. The goal of the meetup is to familiarize women with Vue.js in a supportive and inclusive environment. We are trans* inclusive. All are welcome to attend the meetup.</p> ",
          visibility: "public"
        }
      ]
    };
  },
  components: {},
  i18n: {
    //messages //TODO
  }
};
</script>

<style scoped lang="scss">
.meetup-list {
  padding: 24px 30px;
  width: 100%;
}

.meetup-list > div:not(:first-child) {
  margin-top: 20px;
}
.meetup-item {
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.meetup-item__title {
  font-size: 22px;
  flex-basis: 100%;
  font-weight: 700;
}
.meetup-item__subtitle {
  flex-basis: auto;
  width: auto;
  font-size: 18px;
  margin-right: 1rem;
}
.meetup-item__subtitle:not(:last-child) {
  margin-right: 1rem;
}
</style>
