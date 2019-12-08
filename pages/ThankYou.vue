<template>
  <v-layout class="vv-container" fill-height>
    <v-container class="raised text-center">
      <h1 class="display-3">Thank you for registering!</h1>
      <h2 class="display-1">We've sent you a confirmation email</h2>
      <v-btn
        class="thank-you-button"
        to="/"
        color="card-button secondary darken-2"
        dark
      >Back to home</v-btn>
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
