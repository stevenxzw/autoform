import Vue from 'vue'
import Router from 'vue-router'
import Page from '@/components/NewPage'
import Login from '@/views/login'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page',
      name: 'page',
      component: Page
    },  
    { path: '/login',name: 'login', component: Login},
    { path: '/index', component: require('@/views/index') },
    { path: '/edit', component: require('@/views/edit') },
    { path: '/list', component: require('@/views/list') }
  ]
})
