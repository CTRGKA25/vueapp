import Vue from 'vue'
import accounting from 'accounting'
Vue.prototype.$accounting = accounting
Vue.filter('formatMoney', function (value) {
  return Vue.prototype.$accounting.formatMoney(value, '￥', 2)
})
Vue.filter('formatNumber', function (value) {
  return Vue.prototype.$accounting.formatNumber(value, '2')
})

import moment from 'moment'
moment.locale('zh-cn')
Vue.prototype.$moment = moment
