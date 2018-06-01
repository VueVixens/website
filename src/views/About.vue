<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2">
        <article class="card">
          <div class="card-body">
            <p align="center"><img src="../assets/logo.png"/></p>
            <h4 class="title">{{ $t("vixens.title") }}</h4>
            <i18n path="vixens.content" tag="p" align="left">
              <a class="link-green" href="https://medium.com/@jenlooper/introducing-vue-vixens-82a36455438a"
                 place="medium">{{ $t("vixens.mediumLink") }}</a>
              <a class="link-green" href="http://www.jenlooper.com"
                 place="jen">{{ $t("vixens.jenLink") }}</a>
              <a class="link-green" href="http://www.progress.com"
                 place="progress">{{ $t("vixens.progressLink") }}</a>
              <a class="link-green" href="http://www.ng-girls.org"
                 place="ngGirls">{{ $t("vixens.ngGirlsLink") }}</a>
              <a class="link-green" href="mailto:info@vuevixens.org"
                 place="mail">{{ $t("vixens.mailLink") }}</a>
            </i18n>
            <h4 class="title">{{ $t("activities.title") }}</h4>
            <p align="left">{{ $t("activities.content.paragraph1") }}</p>
            <i18n path="activities.content.paragraph2" tag="p" align="left">
              <b place="mentorsNote">{{ $t("activities.content.mentorsNote") }}</b>
            </i18n>
            <i18n path="activities.content.paragraph3" tag="p" align="left">
              <b place="studentsNote">{{ $t("activities.content.studentsNote") }}</b>
            </i18n>
            <p align="left">{{ $t("activities.content.paragraph4") }}</p>
            <p align="left">{{ $t("activities.content.paragraph5") }}</p>
          </div>
        </article>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import messages from '../translations/about'

  export default {
    i18n: {
      messages
    }
  }
</script>