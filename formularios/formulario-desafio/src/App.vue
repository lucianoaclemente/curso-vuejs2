<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<div class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<NomeUsuario v-model="nomeCompleto" />

				<Rotulo nome="Entre com o email">
					<input type="text" name="email" v-model="email" />
				</Rotulo>
				<Rotulo nome="Entre com o senha">
					<input type="password" name="senha" v-model="senha"/>
				</Rotulo>
				<Rotulo nome="Armazenar os dados">
					<span class="mr-4"><input type="radio" 
						value="sim" v-model="armazenarDados"> Sim</span>
					<span class="mr-4"><input type="radio" 
						value="nao" v-model="armazenarDados"> Não</span>
				</Rotulo>
				
				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

				<button @click.prevent="enviado = true" type="submit">Enviar</button>

				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</div>
			<div class="painel" v-else >
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Entre com o nome">
					<span>{{ nomeCompleto.nome }} {{ nomeCompleto.sobrenome }}</span>
				</Rotulo>
				<Rotulo nome="Entre com o email">
					{{ email }}
				</Rotulo>
				<Rotulo nome="Entre com o senha">
					{{ senha }}
				</Rotulo>
				<Rotulo nome="Armazenar os dados">
					{{ armazenarDados }}
				</Rotulo>		
		
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeUsuario from './components/NomeUsuario.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeUsuario },
	data() {
		return {
			nomeCompleto: {
				nome: '',
				sobrenome: '',
			},
			email: '',
			senha: '',
			armazenarDados: 'nao',
			enviado: false
		}
	}
}
</script>

<style>

body {
	background-color: #ECECEC;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #FFF;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #AAA;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #DDD;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #FFF;
	background-color: #2196F3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
