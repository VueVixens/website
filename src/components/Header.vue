<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand :to="{ name: 'home'}"><img src="../assets/logo-sm.png"/></b-navbar-brand>

    <b-dropdown right class="translations">
      <template slot="button-content">
        <span class="flag-icon" :class="currentLocale.flag"></span>
        <span class="d-none d-md-inline-block">&nbsp;{{currentLocale.language}}</span>
      </template>
      <b-dropdown-item class="translation-item"
                       @click="changeLocale('en')">
        <span class="flag-icon flag-icon-gb"></span> {{ $t("languages.en") }}
      </b-dropdown-item>
      <b-dropdown-item class="translation-item"
                       @click="changeLocale('es')">
        <span class="flag-icon flag-icon-es"></span> {{ $t("languages.es") }}
      </b-dropdown-item>
    </b-dropdown>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item :to="{ name: 'about'}">{{ $t("menu.about") }}</b-nav-item>
        <b-nav-item :to="{ name: 'upcoming'}">{{ $t("menu.upcoming") }}</b-nav-item>
        <b-nav-item :to="{ name: 'request'}">{{ $t("menu.request") }}</b-nav-item>
        <b-nav-item :to="{ name: 'sponsors'}">{{ $t("menu.sponsors") }}</b-nav-item>
        <b-nav-item :to="{ name: 'team'}">{{ $t("menu.team") }}</b-nav-item>
        <b-nav-item :to="{ name: 'gallery'}">{{ $t("menu.gallery") }}</b-nav-item>
        <b-nav-item href="https://vuevixens.threadless.com/">{{ $t("menu.shop") }}</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
  import messages from '../translations/header'
  export default {
    computed: {
      currentLocale() {
        switch(this.$i18n.locale) {
          case 'en':
            return {
              language: this.$t("languages.en"),
              flag: 'flag-icon-gb'
            };
          case 'es':
            return {
              language: this.$t("languages.es"),
              flag: 'flag-icon-es'
            };
        }
      },
    },
    methods: {
      changeLocale(locale) {
        this.$eventBus.$emit('changeLocale', locale);
      }
    },
    i18n: {
      messages
    }
  }
</script>

<style scoped lang="scss">
  .translation-item {
    outline: none;
    &:hover {
      border: none;
      background-color: #47B784;
      color: #fff;
    }
  }

  .translations {
    order: 3
  }
  @media (max-width: 768px) {
    .translations {
      order: 0
    }
  }
</style>
