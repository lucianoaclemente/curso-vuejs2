<template>
    <div class="add-task">
        <input type="text" class="form-element" @keydown.enter="addTask" v-model="description" name="description">
        <button class='form-element' @click="addTask">+</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description : ''
        }
    },
    methods: {
        addTask() {
            this.$emit('onAddTask', { description: this.description })            
            this.description = ''
        }
    }
}
</script>

<style scoped>
    .add-task {
        margin: 35px;
    }

    .form-element {
        outline: none;
        font-size: 2rem;
        border: 1px solid #FFF;
        padding: 5px 10px 8px;
        color: #FFF;
    }

    input.form-element {
        width: 500px;
        background: #FFF2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
</style>
