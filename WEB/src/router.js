import Vue from 'vue'
import Router from 'vue-router'
import Index from "./views/Index.vue"
import Home from "./views/Home.vue"//主页
import MyHeader from "./components/MyHeader.vue"//页头
import Comm from "./components/Comm.vue"



Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/Comm",
      component:Comm
    },
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
