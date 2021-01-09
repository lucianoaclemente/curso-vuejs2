new Vue({
    el: '#desafio',
    data: {
        nome: 'Luciano Clemente',
        idade: 45,
        getNumeroRnd:  function() {
            return Math.random()
        },
        url_imagem: 'https://vuejs.org/images/logo.png'

    }
})
