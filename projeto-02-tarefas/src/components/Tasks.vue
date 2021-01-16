<template>
    <div class="task-grid">
        <template v-if="tasks.length">
            <TaskItem v-for="(task, i) in tasks" 
                :key="task.description"
                @onDeleteTask="$emit('onDeleteTask', i)"
                @onCheckTask="$emit('onCheckTask', i)"
                :task="task"></TaskItem>
            
        </template>
        <p class="no-task" v-else>Nenhuma tarefa pendente.</p>
    </div>
</template>

<script>
import TaskItem from './TaskItem.vue'

export default {
    components: { TaskItem },
    props: {
        tasks: { type: Array, required: true }
    }
}
</script>

<style scoped>
    .task-grid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .task-grid .task {
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>
