<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }} / {{ $route.params.id }}</p>   
        <p><strong>Completo: </strong>{{ $route.query.completo }}</p>   
        <p><strong>Lingua: </strong>{{ $route.query.lingua }}</p>   
        <hr>
        <button primario @click="confirmou = true">Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    // recuperando por props
    props: ['id'],
    data() {
        return {
            confirmou: false
        }
    },
    beforeRouteLeave(to, from, next) {
        if (this.confirmou) {
            next()
        } else {
            if (confirm('Tem certeza?')) {
                next()
            } else {
                next(false)
            }
        }
    }
}
</script>

<style scoped>
    #rodape {
        margin-top: 1000px;
    }
</style>