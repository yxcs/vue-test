import Vue from 'vue'
import VueRouter from 'vue-router'

import Header from './components/header.vue'
import Home from './components/home.vue'
import Footer from './components/footer.vue'
import Content from './components/content.vue'
import Charts from './components/charts.vue'
import Details from './components/details.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/home', component: Content, name:'content',
   children: [
        {
          path: 'footer',
          component: Footer
        }
      ]
  },
  {path: '/details/:id', component: Details, name: 'details'},
  {path: '/charts', component: Charts, name:'charts'},
  {path: '*', component: Content, name:'home'}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
