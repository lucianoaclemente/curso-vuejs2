import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'
// import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista.vue'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
// import UsuarioEditar from './components/usuario/UsuarioEditar.vue'

Vue.use(Router)

// Carregando de forma tardia, separadamente...
// const Usuario = () => import('./components/usuario/Usuario')
// const UsuarioLista = () => import('./components/usuario/UsuarioLista')
// const UsuarioDetalhe = () => import('./components/usuario/UsuarioDetalhe')
// const UsuarioEditar = () => import('./components/usuario/UsuarioEditar')

const Usuario = () => import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')


const router =  new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    }, 
    routes: [{
        name: 'inicio',
        path: '/',
        //component: Inicio
        components: {
            default: Inicio, 
            menu: Menu
        }
    },{
        path: '/usuario',
        //component: Usuario,
        components: {
            default: Usuario, 
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista, props: true },
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuario detalhe')
                    next()
                } },
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' },
        ]

    },{
        path: '/redirecionar',
        redirect: '/usuario'
    },{
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('antes das rotas -> global')
    next()

    //next(false)

    // if (to.path !== '/usuario') {
    //     next('/usuario')
    // } else {
    //     next()
    // }
})

export default router