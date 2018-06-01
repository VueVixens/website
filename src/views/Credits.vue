<template>
  <b-container fluid>
    <b-row>
      <b-col md="6" offset-md="3">
        <article class="card">
          <div class="card-body">
            <h4 class="title">{{ $t("title") }}</h4>
            <p class="card-text">
              {{ $t("subtitle") }}
            </p>
            <ul class="list">
              <i18n class="list-item" tag="li" path="item1">
                <a class="link-green" href="https://unsplash.com/" place="unsplash">{{ $t("unsplashLink") }}</a>
                <a class="link-green" place="artist"
                  href="http://www.kaixinfun.com/article/detail/1742/These-Are-The-Weirdest-Names-For-Groups-Of-Animals">
                  {{ $t("artistLink") }}
                </a>
              </i18n>
              <i18n class="list-item" tag="li" path="item2">
                <a class="link-green" href="http://www.ng-girls.org" place="ngGirls">ng-Girls</a>
                <a class="link-green" href="http://www.djangogirls.org" place="djangoGirls">Django Girls</a>
                <a class="link-green" href="http://railsbridge.org/" place="railsBridge">Rails Bridge</a>
              </i18n>
            </ul>
          </div>
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import messages from '../translations/credits'
  export default {
    i18n: {
      messages
    }
  }
</script>
