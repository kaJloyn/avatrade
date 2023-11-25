import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from './plugins/vuetify'


import { CustomRouter } from "@/custom-router"
import { routes } from "@/custom-router/routes"

Vue.config.productionTip = false


import './styles/app.scss'


const router = new CustomRouter(routes)

new Vue({
  store,
  vuetify,

  created () {
    this.$customRouter = router
    this.$customRouter.init()
  },

  render: h => h(App)
}).$mount('#app')
