import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//导入路由
import VueRouter from'vue-router'
Vue.use(VueRouter)
import "./assets/site/css/style.css"
//导入组件
import index from "./components/index.vue"

//路由规则
const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:index
  }
]
// 实例化路由
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
