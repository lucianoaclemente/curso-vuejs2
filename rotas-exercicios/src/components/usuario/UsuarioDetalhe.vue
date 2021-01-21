<template>
    <div class="usuario-detalhe">
        <h3>Usuário Detalhe</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
        <hr>
        <router-link tag="button" primario 
            :to="{ name: 'editarUsuario', params: { id },
                query: { completo: true, lingua: 'en' },
                hash: '#rodape' }">
            <!-- :to="`/usuario/${$route.params.id}/editar`">  -->
            Editar
        </router-link>
    </div>
</template>

<script>
export default {
    // recuperando por props
    props: ['id'],
    beforeRouteEnter(to, from, next) {
        console.log('dentro do componente -> usuario detalhe')
        next()
        // Uma forma de acessar as props antes..         
        // next(vm => {
        //     console.log(vm.id)
        // })
    }

    // recuperando por data/watch
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // },
    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id
    //     }
    // },
}
</script>

<style scoped>

</style>