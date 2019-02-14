import Vue from 'vue'
import Router from 'vue-router'
import homePage from "../pages/homePage/homePage"
import twoPage from "../pages/twoPage/twoPage"
import threePage from "../pages/threePage/threePage"
import fourPage from "../pages/fourPage/fourPage"
import fivePage from "../pages/fivePage/fivePage"

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/homepage',
      component: homePage,
      meta: {
        isShow: true
      }
    },
    {
      path: '/twopage',
      component: twoPage,
      meta: {
        isShow: true
      }
    },
    {
      path: '/threepage',
      component: threePage,
      meta: {
        isShow: true
      }
    },
    {
      path: '/fourpage',
      component: fourPage,
      meta: {
        isShow: true
      }
    },
    {
      path: '/fivepage',
      component: fivePage,
      meta: {
        isShow: true
      }
    },
    {
      path: '/',
      redirect: "/homepage"
    },
  ]
})
router.beforeEach((to, from, next) => {
    next()/*全局导航守卫*/
})
export default router
