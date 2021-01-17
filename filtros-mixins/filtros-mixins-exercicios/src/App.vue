<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ usuarioLogado }}</p>
		<hr>
		<p>{{ 60070080090 | formataCpf }}</p>
		<hr>
		<p>{{ cpf | formataCpf | inverter }}</p>
		<hr>
		<p>{{ 'Teste' | inverter }}</p>
		<hr>
		<input type="text" :value="cpf | formataCpf"  >
		<hr>
		<Frutas />
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
	    </div>
	</div>
</template>

<script>
import FrutasMixin from './FrutasMixin.js'
import UsuarioMixin from './UsuarioMixin.js'
import Frutas from './Frutas.vue'

export default {
	components: { Frutas },
	mixins: [ FrutasMixin, UsuarioMixin ],
	filters: {
		formataCpf(valor) {
			const arr = `${valor}`.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpf: '60070080090'
		}
	},
    created() {
        console.log('Created - App.vue')
    }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
