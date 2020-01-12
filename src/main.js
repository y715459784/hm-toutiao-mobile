import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// import 'vant/lib/index.css'
import plugin from '@/utils/plugin'
import 'vant/lib/index.less'
import '@/styles/index.less' // 引入全局的自定义样式  因为要覆盖vant的样式
import 'amfe-flexible'
Vue.use(Vant)
Vue.use(plugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
