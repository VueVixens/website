<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="raised text-center">
      <h1>Hurray here you are!!</h1>
      <h2>Thank you for signing up!</h2>
      <h3>We've sent you a confirmation email</h3>
      <v-btn class="thank-you-button" to="/" color="card-button secondary darken-2" dark>Back home</v-btn>
    </v-container>
  </v-layout>
</template>

<style scoped>
.raised {
  z-index: 3;
}

.thank-you-button {
  margin-top: 40px;
}
</style>
