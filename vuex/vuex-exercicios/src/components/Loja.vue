<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
//import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed: {
        quantidade() {
            return this.$store.state.parametros.quantidade
        },
        preco() {
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        //...mapMutations(['adicionarProduto']),
        ...mapActions('carrinho', ['adicionarProduto']),
        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++

            // Forma 1 usando mutations
            // this.$store.commit('adicionarProduto', produto)    
            
            // Forma 2 usando spread
            // this.adicionarProduto(produto)

            // Forma 3 usando actions 
            //this.$store.dispatch('adicionarProduto', produto)
            this.adicionarProduto(produto)

            // Forma convencional acessando o store
            //this.$store.state.produtos.push(produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
