<template>
    <Painel titulo="Resumo" roxo>
        <div class="resumo">
            <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            
            <!-- Alterado para o mapgetters -->
            <!--<span>Total: <strong>{{ valorTotal | dinheiro }}</strong></span>-->
            
            <hr>
            <button>Finalizar!</button>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    // Forma 3 mapeando o identificador 
    computed: mapGetters('carrinho', {
        total: 'valorTotal'
    })
    
    // Forma 2 com mapGetters necessita alteração
    // computed: mapGetters(['valorTotal'])

    // Forma convencional acessando pelo this.$store
    // computed: {
    //     total() {
    //         return this.$store.getters.valorTotal
    //     }
    // }
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }
</style>
