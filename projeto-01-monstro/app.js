new Vue({
    el: '#app',
    data: {
        gameOver: false,
        jogador: {
            energia: 100,
            ataque: 1,
            ataqueEspecial: 2
        },
        monstro: {
            energia: 100,
            ataque: 1.5
        },
        ataqueContador: 0,        
        eventos: []
    },
    computed: {
        hasResult() {
            return this.jogador.energia == 0 || this.monstro.energia == 0
        }
    },
    methods: {
        iniciarJogo() {
            this.jogador.energia = 100
            this.monstro.energia = 100
            this.gameOver = false
            this.eventos = []
        },        
        executaAtaque(especial) {
            if (especial) {
                this.ataqueContador = 0
            } else {
                if (this.ataqueContador < 5)
                this.ataqueContador++
            }

            this.acaoAtaque(especial, "jogador", "monstro", "player")           

            if (this.monstro.energia > 0) {
                this.acaoAtaque(false, "monstro", "jogador", "monster")           
            }        
        },
        acaoAtaque(especial, origem, destino, cls) {
            forca = Math.floor(Math.random() * 10) + 1
            forcaAtaque = this[origem].ataque * forca * (especial ? this[origem].ataqueEspecial : 1 )
            
            this.addEvento(`${origem} atingiu ${destino} com ${forcaAtaque}.`, cls) 

            if (forcaAtaque < this[destino].energia) {
                this[destino].energia -= this[origem].ataque * forca
            } else {
                this[destino].energia = 0
                this.gameOver = true
            } 
        },
        addEvento(text, cls) {
            this.eventos.unshift({ text, cls })
        },
        getCure() {            
            let cureLevel = Math.floor(Math.random() * 10)
            this.jogador.energia = Math.min(this.jogador.energia + cureLevel, 100)
            this.addEvento(`Jogador ganhou força de ${cureLevel}.`, 'player')
            this.acaoAtaque(false, "monstro", "jogador", "monster")           
        }               
    }

})