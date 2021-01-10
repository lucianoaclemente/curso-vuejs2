new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(event) {
            alert("Alerta!")
        },
        atualizaValor(event) {
            this.valor = event.target.value 
        }
    }
})