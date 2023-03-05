<script setup>
import { reactive, ref, computed } from 'vue'

const awesome = ref(true)
// 



</script>
<template>
    <h2 class="text-center">Условная отрисовка</h2>
    <v-divider class="ma-4"></v-divider>
    <h4>v-if</h4>
    <v-btn @click="awesome = !awesome">Toggle</v-btn>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    <v-divider class="ma-4"></v-divider>
    <h4>v-show</h4>
    <h1 v-show="awesome">Hello!</h1>
</template>
<style scoped></style>