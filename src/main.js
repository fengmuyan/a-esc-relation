import 'normalize.css/normalize.css'
import '@/assets/styles/index.scss'
import '@/assets/styles/private.scss'
import Vue from 'vue'
import Cookies from 'js-cookie'

import App from './App'
import store from './store'
import router from './router'
import Element from 'element-ui'
import throttle from './directive/throttle'

import './assets/icons'
import './permission'
import Pagination from "@/components/Pagination";

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
}
Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
}
Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}

// 全局组件挂载
Vue.component('Pagination', Pagination)
Vue.use(Element, {
  size: Cookies.get('size') || 'medium'
})
Vue.use(throttle)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
