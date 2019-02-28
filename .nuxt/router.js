import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _ae8948b8 = () => import('../pages/About.vue' /* webpackChunkName: "pages/About" */).then(m => m.default || m)
const _56579a71 = () => import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */).then(m => m.default || m)
const _31777dae = () => import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */).then(m => m.default || m)
const _43091212 = () => import('../pages/Library.vue' /* webpackChunkName: "pages/Library" */).then(m => m.default || m)
const _a8265434 = () => import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */).then(m => m.default || m)
const _23bac652 = () => import('../pages/Sponsors.vue' /* webpackChunkName: "pages/Sponsors" */).then(m => m.default || m)
const _225b22d4 = () => import('../pages/Team.vue' /* webpackChunkName: "pages/Team" */).then(m => m.default || m)
const _586dcc8e = () => import('../pages/ThankYou.vue' /* webpackChunkName: "pages/ThankYou" */).then(m => m.default || m)
const _bebfc2f0 = () => import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */).then(m => m.default || m)
const _10c06271 = () => import('../pages/form/_form.vue' /* webpackChunkName: "pages/form/_form" */).then(m => m.default || m)
const _76a611ab = () => import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */).then(m => m.default || m)
const _51011689 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/About",
			component: _ae8948b8,
			name: "About"
		},
		{
			path: "/Credits",
			component: _56579a71,
			name: "Credits"
		},
		{
			path: "/Gallery",
			component: _31777dae,
			name: "Gallery"
		},
		{
			path: "/Library",
			component: _43091212,
			name: "Library"
		},
		{
			path: "/Request",
			component: _a8265434,
			name: "Request"
		},
		{
			path: "/Sponsors",
			component: _23bac652,
			name: "Sponsors"
		},
		{
			path: "/Team",
			component: _225b22d4,
			name: "Team"
		},
		{
			path: "/ThankYou",
			component: _586dcc8e,
			name: "ThankYou"
		},
		{
			path: "/events/:event?",
			component: _bebfc2f0,
			name: "events-event"
		},
		{
			path: "/form/:form?",
			component: _10c06271,
			name: "form-form"
		},
		{
			path: "/galleries/:gallery?",
			component: _76a611ab,
			name: "galleries-gallery"
		},
		{
			path: "/",
			component: _51011689,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
