<template>
  <div id="app">
    <header-bar class="header"></header-bar>
    <router-view class="view content"></router-view>
    <footer-bar class="footer"></footer-bar>
  </div>
</template>

<script>
  import HeaderBar from './components/Header.vue'
  import FooterBar from './components/Footer.vue'

  export default {
    components: {HeaderBar, FooterBar},
    name: 'app',
    created() {
      this.$storyblok.init({
        //TODO: fix this dev/prod API key by adding to Firebase function
        //accessToken: 'plc0fBh2no8owEeTALSN2wtt'
        accessToken: 'fjDrPjQqBuBfO2GzzbzHvQtt'
      });
      this.$eventBus.$on('changeLocale', locale =>  this.$i18n.locale = locale )
    }
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  html, body {
    height: 100%;
  }

  .content {
    flex: 1 0 auto;
    /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  }

  .row {
    max-width: calc(100% + 25px);
  }

  .form-group.required > label:after {
    content: "*";
    font-weight: 400;
    color: red;
    padding-left: .2em;
    font-size: 1em;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .link-green {
    color: #42b983;
  }

  .header, .footer {
    flex-shrink: 0;
    /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
    padding: 10px;
  }

  .container-fluid {
    padding: 10px;
  }

  .form {
    padding: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  article, .article {
    text-align: center;
  }

  .card.darkened {
    cursor: pointer;
    img {
      -webkit-filter: brightness(0.7);
      -moz-filter: brightness(0.7);
      -o-filter: brightness(0.7);
      filter: brightness(0.7);
    }
    &:hover {
      -webkit-box-shadow: 0 0 5px 0 rgba(50, 50, 50, 1);
      -moz-box-shadow: 0 0 5px 0 rgba(50, 50, 50, 1);
      box-shadow: 0 0 5px 0 rgba(50, 50, 50, 1);
      border: 1px solid rgba(50, 50, 50, 0.6);
      img {
        -webkit-filter: brightness(1);
        -moz-filter: brightness(1);
        -o-filter: brightness(1);
        filter: brightness(1);
      }
    }
  }

  @media (max-width: 768px) {
    .card.darkened {
      cursor: pointer;
      img {
        -webkit-filter: brightness(1);
        -moz-filter: brightness(1);
        -o-filter: brightness(1);
        filter: brightness(1);
      }
    }
  }
</style>