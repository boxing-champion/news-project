// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'

Vue.config.productionTip = false

/*mint-ui*/
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
/*mint-ui*/

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
