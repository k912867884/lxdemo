import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index.vue"
import Home from "./views/Home.vue"//主页
import MyHeader from "./components/MyHeader.vue"//页头



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      component:Home
    },
    {
      path: '/Index',
      component: Index
    },
    {
      path:"/MyHeader",
      component:MyHeader
    }
  ]
})
