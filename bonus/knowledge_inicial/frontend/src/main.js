import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'
import './config/bootstrap'
import './config/msgs'

import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// temp
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1Y2lhbm8gQS4gQ2xlbWVudGUiLCJlbWFpbCI6Imx1Y2lhbm8uY2xlbWVudGVAbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjEyNzkwMTgwLCJleHAiOjE2MTMwNDkzODB9.6pRRJnv_qJCd9vwsh68fyuE5NAv2vKPlSADsSZ5HQ40'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')