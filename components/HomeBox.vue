<template>
  <v-flex class="vv-cta">
    <v-container>
      <v-layout class="card" align-center row wrap justify-space-between>
        <v-flex xs12 sm12 md6 class="text-center" order-md1>
          <v-img class="mentor" src="/images/mentoring.jpg"></v-img>
        </v-flex>
        <v-flex xs12 sm12 md6 order-md2>
          <h2 class="vv-subheading font-lato text-center text-md-right">Workshops and Events</h2>
          <h3 class="vv-sub-subheading font-lato text-center text-md-right">Women helping women</h3>
          <v-flex text-center text-md-right>
            <v-btn class="cta-react" color="secondary darken-1">React Workshops coming soon</v-btn>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-flex>
</template>

<style scoped lang="scss">
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-right: 10px;
}
.cta-react {
  margin-top: 30px;
}

.vv-card-text {
  padding-top: 15px;
}

.mentor {
  max-width: 800px;
}

@media (max-width: 960px) {
  .cta-react {
    padding-top: 10px;
    text-align: center;
  }
  .card {
    padding: 0px 0px 10px 0px;
    margin: 5px;
  }
}

@media (max-width: 420px) {
  .cta-react {
    padding-top: 10px;
    text-align: center;
  }
}
</style>
