import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = {"id":"UA-65309624-3"}
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}
