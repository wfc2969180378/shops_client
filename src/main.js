// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import './mock/mockServer'  //　加载mockServer即可

Vue.config.productionTip = false
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
})
