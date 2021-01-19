import Vue from 'vue'
import Router from 'vue-router'
//import Inicio from './components/Inicio.vue'
//import Usuario from './components/usuario/Usuario.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        component: require('./components/Inicio.vue').default        
    },{
        path: '/usuario',
        component: require('./components/usuario/Usuario.vue').default        
    }]
})