import Vue from 'vue'
import Router from 'vue-router'
import head from '@/components/head'
import special from '@/components/special'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Head',
      component: {head}
    },
    {
      path:'/',
      name:'special',
      components:{special}
    }
  ]
})
