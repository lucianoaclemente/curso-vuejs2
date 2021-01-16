<template>
	<div id="app">
		<h1>Tarefas</h1>		
		<ProgressBar :progress="progress" />
		<AddTask @onAddTask="addTask" />
		<Tasks :tasks="tasks" 
				@onDeleteTask="deleteTask" 
				@onCheckTask="CheckTask"/>
	</div>	
		
	
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import AddTask from './components/AddTask.vue'
import Tasks from './components/Tasks.vue'

export default {
	data() {
		return {
			tasks: []
		}
	},	
	components: {
		ProgressBar, AddTask, Tasks
	},
	computed: {
		progress() {
			const total = this.tasks.length			
			const done = this.tasks.filter(t => t.checked).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		tasks: {
			deep: true,
			handler() {
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTask(task) {
			const sameName = t => t.description === task.description
			const reallyNew = this.tasks.filter(sameName).length == 0
			if(reallyNew) {
				this.tasks.push({
					description: task.description,
					checked: false
				})			
			}		
		},
		deleteTask(index) {	
			this.tasks.splice(index, 1)
		},
		CheckTask(index) {
			this.tasks[index].checked = !this.tasks[index].checked 
		}
	},
	created() {
		const json = localStorage.getItem('tasks')
		const array = JSON.parse(json)
		this.tasks = Array.isArray(array) ? JSON.parse(json) : []
	}
}
</script>

<style>
	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}

</style>
