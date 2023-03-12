<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button @click="count++">По мне кликнули {{ count }} раз.</button>

</template>