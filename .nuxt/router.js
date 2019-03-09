import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6b25963e = () => import('../pages/Gallery.vue' /* webpackChunkName: "pages/Gallery" */).then(m => m.default || m)
const _50b71a19 = () => import('../pages/ThankYou.vue' /* webpackChunkName: "pages/ThankYou" */).then(m => m.default || m)
const _2fce2afb = () => import('../pages/Request.vue' /* webpackChunkName: "pages/Request" */).then(m => m.default || m)
const _11438cbe = () => import('../pages/Team.vue' /* webpackChunkName: "pages/Team" */).then(m => m.default || m)
const _4b8e20f4 = () => import('../pages/Credits.vue' /* webpackChunkName: "pages/Credits" */).then(m => m.default || m)
const _9cae1c0e = () => import('../pages/About.vue' /* webpackChunkName: "pages/About" */).then(m => m.default || m)
const _722b31b2 = () => import('../pages/Library.vue' /* webpackChunkName: "pages/Library" */).then(m => m.default || m)
const _1c0413dd = () => import('../pages/Sponsors.vue' /* webpackChunkName: "pages/Sponsors" */).then(m => m.default || m)
const _1bec793c = () => import('../pages/form/_form.vue' /* webpackChunkName: "pages/form/_form" */).then(m => m.default || m)
const _7f5ee046 = () => import('../pages/events/_event.vue' /* webpackChunkName: "pages/events/_event" */).then(m => m.default || m)
const _09a02d76 = () => import('../pages/galleries/_gallery.vue' /* webpackChunkName: "pages/galleries/_gallery" */).then(m => m.default || m)
const _59eeacde = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			path: "/Gallery",
			component: _6b25963e,
			name: "Gallery"
		},
		{
			path: "/ThankYou",
			component: _50b71a19,
			name: "ThankYou"
		},
		{
			path: "/Request",
			component: _2fce2afb,
			name: "Request"
		},
		{
			path: "/Team",
			component: _11438cbe,
			name: "Team"
		},
		{
			path: "/Credits",
			component: _4b8e20f4,
			name: "Credits"
		},
		{
			path: "/About",
			component: _9cae1c0e,
			name: "About"
		},
		{
			path: "/Library",
			component: _722b31b2,
			name: "Library"
		},
		{
			path: "/Sponsors",
			component: _1c0413dd,
			name: "Sponsors"
		},
		{
			path: "/form/:form?",
			component: _1bec793c,
			name: "form-form"
		},
		{
			path: "/events/:event?",
			component: _7f5ee046,
			name: "events-event"
		},
		{
			path: "/galleries/:gallery?",
			component: _09a02d76,
			name: "galleries-gallery"
		},
		{
			path: "/",
			component: _59eeacde,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
