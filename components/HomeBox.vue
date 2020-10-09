<template>
  <v-flex class="vv-cta">
    <v-container>
      <v-layout class="card" align-center wrap justify-space-between>
        <v-flex xs12 sm5 md6 class="text-center" order-md1>
          <v-img class="mentor" src="/images/mentoring.jpg"></v-img>
        </v-flex>
        <v-flex xs12 sm7 md6 order-md2 vv-card-text text-sm-left text-md-center>
          <h2 class="vv-subheading font-lato">Workshops and Events</h2>
          <p class="font-lato">Women helping women</p>
          <v-flex>
            <v-btn class="cta-react disabled" color="secondary darken-1"
              >React Workshops<br />
              coming soon</v-btn
            >
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<style scoped lang="scss">
.card {
  border-radius: 0;
  -moz-box-shadow: 0 0 5px #d4d4d4;
  -webkit-box-shadow: 0 0 5px#d4d4d4;
  box-shadow: 0 0 5px #d4d4d4;
  padding-right: 10px;
}

.vv-card-text {
  padding: 20px 15px;
}

.cta-react {
  width: 100%;
  padding: 10px !important;
  height: auto !important;
  text-align: center;
}

@media (min-width: 421px) {
  .cta-react {
    width: auto;
    padding-top: 10px;
    text-align: center;

    br {
      display: none;
    }
  }

  .card {
    padding: 0px;
    margin: 5px 5px 30px;
  }
}

@media (min-width: 600px) {
  .vv-card-text {
    padding: 20px 25px;
  }

  .cta-react {
    font-size: 14px;
  }
}

@media (min-width: 960px) {
  .vv-card-text {
    padding: 20px 30px;
  }

  .cta-react {
    font-size: 16px;
  }
}
</style>
