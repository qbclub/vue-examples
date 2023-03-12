<script setup>
defineProps(['title'])
// defineEmits(['enlarge-text'])
</script>

<template>
    <div>
        <h4>{{ title }}</h4>
        <v-divider class="ma-4"></v-divider>
        <p> текст блога</p>
        <!-- <button @click="$emit('enlarge-text')">Увеличить текст</button> -->
    </div>
</template>
<style scoped>
div {
    width: 200px;
    aspect-ratio: 1;
    border: 1px solid black;
    margin: 8px;
}
</style>