import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3d928798 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _7e32823e = () => interopDefault(import('..\\pages\\Credits.vue' /* webpackChunkName: "pages_Credits" */))
const _232c848e = () => interopDefault(import('..\\pages\\gallery.vue' /* webpackChunkName: "pages_gallery" */))
const _4a2e8ea2 = () => interopDefault(import('..\\pages\\library.vue' /* webpackChunkName: "pages_library" */))
const _167bfa56 = () => interopDefault(import('..\\pages\\Request.vue' /* webpackChunkName: "pages_Request" */))
const _0144dbc2 = () => interopDefault(import('..\\pages\\sponsors.vue' /* webpackChunkName: "pages_sponsors" */))
const _3fbe87f4 = () => interopDefault(import('..\\pages\\team.vue' /* webpackChunkName: "pages_team" */))
const _3fc3361e = () => interopDefault(import('..\\pages\\ThankYou.vue' /* webpackChunkName: "pages_ThankYou" */))
const _03682e1d = () => interopDefault(import('..\\pages\\events\\_event.vue' /* webpackChunkName: "pages_events__event" */))
const _c8e51d74 = () => interopDefault(import('..\\pages\\form\\_form.vue' /* webpackChunkName: "pages_form__form" */))
const _0defbf2c = () => interopDefault(import('..\\pages\\galleries\\_gallery.vue' /* webpackChunkName: "pages_galleries__gallery" */))
const _00ee96f9 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _3d928798,
    name: "about"
  }, {
    path: "/Credits",
    component: _7e32823e,
    name: "Credits"
  }, {
    path: "/gallery",
    component: _232c848e,
    name: "gallery"
  }, {
    path: "/library",
    component: _4a2e8ea2,
    name: "library"
  }, {
    path: "/Request",
    component: _167bfa56,
    name: "Request"
  }, {
    path: "/sponsors",
    component: _0144dbc2,
    name: "sponsors"
  }, {
    path: "/team",
    component: _3fbe87f4,
    name: "team"
  }, {
    path: "/ThankYou",
    component: _3fc3361e,
    name: "ThankYou"
  }, {
    path: "/events/:event?",
    component: _03682e1d,
    name: "events-event"
  }, {
    path: "/form/:form?",
    component: _c8e51d74,
    name: "form-form"
  }, {
    path: "/galleries/:gallery?",
    component: _0defbf2c,
    name: "galleries-gallery"
  }, {
    path: "/",
    component: _00ee96f9,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
