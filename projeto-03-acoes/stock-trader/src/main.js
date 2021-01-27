import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './plugins/axios'

import router from './router'
import store from './store/store'

import moment from 'moment'

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$ ' + value.toLocaleString()
}) 

Vue.filter('datetime', value => {
	return moment(value.toString()).format('DD/MM/YYYY hh:mm')

	
}) 

new Vue({
	router, 
	store,
	render: h => h(App),
}).$mount('#app')
