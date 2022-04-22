import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vGanttChart from 'v-gantt-chart';

// 引入全局样式
import '@/assets/css/index.scss'

import vuetify from '@/plugins/vuetify'
// 全局引入按需引入UI库 vant
// import '@/plugins/vant'
//权限
// import '@/permission'

Vue.config.productionTip = false
Vue.use(vGanttChart);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
