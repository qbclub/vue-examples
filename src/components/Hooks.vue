<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>

<template>
  <h2 class="text-center">Lifecycle Hooks</h2>
  <v-divider class="ma-4"></v-divider>
    <h4>Registering Lifecycle Hooks</h4>
    <h4>Lifecycle Diagram</h4>
    <img src="../assets/lifecycle.png" alt="" class="w-50">
</template>