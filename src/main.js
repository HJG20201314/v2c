import Vue from 'vue'
import App from './App.jsx'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import XEUtils from 'xe-utils'
import {VXETable, Icon, Footer, Column, Table, Tooltip} from 'vxe-table'
import './styles/element-variables.scss'
import './styles/public.scss'
import 'vxe-table/lib/style.css'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
import installGlobalComponents from '@/components'
import { api } from '@/api/http.js'
import clickOutside from '@/directives/click-outside'
Vue.directive('click-outside', clickOutside)
import dragDirective from '@/directives/drag-directive'
Vue.directive('drag-directive', dragDirective)

Vue.config.productionTip = false
Vue.prototype.$http = api

Vue.use(ElementUI)

// 按需加载的方式默认是不带国际化的，自定义国际化需要自行解析占位符 '{0}'，例如：
VXETable.config({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCN, key), args)
})

Vue.use(Icon).use(Tooltip).use(Column).use(Footer).use(Table)

// 注册全局组件
installGlobalComponents()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
