<template>
    <div>
        <Rotulo nome="Nome">
            <input type="text" :value="value.nome" @input="alternaNome" >
        </Rotulo>
        <Rotulo nome="Sobrenome">
            <input type="text" :value="value.sobrenome" @input="alternaSobrenome">
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
    components: { Rotulo },
    props: {
        value: {
            type: Object,
            required: true
        }
    },
    methods: {
        alternaNome(event) {
           this.$emit('input', {
                nome: event.target.value,
                sobrenome: this.value.sobrenome
            })
        },
        alternaSobrenome(event) {
            this.$emit('input', { 
                nome: this.value.nome, 
                sobrenome: event.target.value
            })
        }

    }
}
</script>

<style scoped>

</style>
