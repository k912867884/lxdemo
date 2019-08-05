import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"
//引入mint-ui
import MintUI from "mint-ui"
//引入mint-ui的样式
import "mint-ui/lib/style.css"
//将mint-ui注册vue
Vue.use(MintUI)

Vue.prototype.axios=axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
