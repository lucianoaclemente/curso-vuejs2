<template>
    <div class="citacao">       
        <!-- slot nomeado -->
        <slot name="autor"></slot>
        <!-- slot padrao -->
        <slot></slot>
        <!-- slot nomeado -->
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .citacao {
        border: 1px solid #DDD;
        background-color: rgba(0, 0, 0, .1);
        padding: 25px;
        max-width: 450px;
    }

    h1 {
        color: red!important;
    }
</style>
