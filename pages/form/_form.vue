<template>
  <v-layout class="vv-container" fill-height>
    <template v-if="!genderQuestionAnswered && !showSorryMessage">
      <v-container fill-height class="raised">
        <h1>
          Vue Vixens Workshops are for women and people who identify as such.
          Before we start, please tell us whether you identify as a woman
        </h1>
        <div class="actions">
          <v-btn color="secondary darken-2" dark @click="genderQuestionAnswered = true">Yes</v-btn>
          <v-btn color="secondary darken-2" dark @click="proceedToSorryMessage">No</v-btn>
        </div>
      </v-container>
    </template>
    <template v-else-if="!showSorryMessage">
      <v-container class="indexed">
        <v-flex xs12>
          <h1 class="display-2 text-xs-center">Event registration form</h1>
          <v-form
            action="https://vuevixens.us7.list-manage.com/subscribe/post?u=bb4724549551e6cf7bb5e3165&amp;id=ecd2dfeb93"
            method="post"
            class="submit-form"
            v-model="valid"
          >
            <v-text-field name="EMAIL" label="Email *" v-model="email" :rules="emailRules"></v-text-field>
            <v-text-field name="FNAME" label="Full name *" v-model="name" :rules="nameRules"></v-text-field>
            <v-text-field name="AFFIL" label="Affiliation"></v-text-field>
            <v-text-field name="FOOD" label="Food preferences (if any)"></v-text-field>
            <input type="text" name="CONF" class="hidden-field" :value="formEvent">
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div class="hidden-field">
              <input type="text" name="b_7754f9dbbdff11682c8ff2e73_54e8642cad" tabindex="-1" value>
            </div>
            <v-checkbox
              color="secondary"
              v-model="gdpr"
              label="I agree to receive emails from VueVixens *"
              :rules="gdprRules"
            ></v-checkbox>
            <p class="text-xs-left caption">
              You can unsubscribe at any time by clicking the link in the footer
              of our emails.
            </p>
            <p class="text-xs-left caption">
              We use Mailchimp as our marketing platform. By clicking below to
              subscribe, you acknowledge that your information will be
              transferred to Mailchimp for processing.
              <a
                href="https://mailchimp.com/legal/"
                target="_blank"
              >Learn more about Mailchimp's privacy practices here.</a>
            </p>
            <v-btn color="secondary darken-2" dark type="submit" :disabled="!valid">Submit</v-btn>
          </v-form>
        </v-flex>
      </v-container>
    </template>
    <template v-else>
      <v-container class="raised">
        <h1>Sorry, we cannot register you for this workshop</h1>
        <div class="actions">
          <v-btn color="secondary darken-2" dark to="/">Back to home</v-btn>
        </div>
      </v-container>
    </template>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      formEvent: this.$route.params.form,
      email: "",
      name: "",
      gdpr: false,
      nameRules: [name => !!name || "Name is required"],
      emailRules: [
        email => !!email || "Email is required",
        email =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email) ||
          "Email must be valid"
      ],
      gdprRules: [
        gdpr => !!gdpr || "Please check this checkbox to finish registration"
      ],
      genderQuestionAnswered: false,
      showSorryMessage: false
    };
  },
  methods: {
    proceedToSorryMessage() {
      this.genderQuestionAnswered = true;
      this.showSorryMessage = true;
    },
  head() {
    return {
      title: `Registration`,
      meta: [
        { hid: 'description', name: 'description', content: `Register for a Vue Vixens event` }
      ]
    }
  }
  }
};
</script>

<style scoped>
.submit-form {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
  text-align: center;
}
.hidden-field {
  position: absolute;
  left: -5000px;
}
.card-button {
  margin-top: 20px;
}

.theme--dark.v-btn.v-btn--disabled:not(.v-btn--icon):not(.v-btn--flat) {
  background-color: #373737 !important;
}

.raised {
  z-index: 3;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.actions {
  padding-top: 40px;
}
</style>
