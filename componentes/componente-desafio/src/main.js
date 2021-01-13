import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Menu from './Menu.vue'
import Carousel from './Carousel.vue'
import Toolbar from './Toolbar.vue'
import Footer from './Footer.vue'

Vue.config.productionTip = false

Vue.component('app-menu', Menu) 
Vue.component('app-carousel', Carousel) 
Vue.component('app-toolbar', Toolbar) 
Vue.component('app-footer', Footer) 

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
