<script setup>
import { ref, onMounted, watchEffect } from 'vue'

const input = ref(null)

const list = ref([1, 2, 3])
const itemRefs = ref([])

onMounted(() => {
  input.value.focus()
  console.dir(input.value)

})

</script>

<template>
  <h2 class="text-center">Template Refs</h2>
  <v-divider class="ma-4"></v-divider>
  <h4>Доступность refs </h4>
  <input ref="input" />
  <v-divider class="ma-4"></v-divider>
  <h4>Refs внутри v-for </h4>
  <ul>
    <li v-for="item in list" ref="itemRefs">
      {{ item }}
    </li>
  </ul>
  <ul>
    <li v-for="item in itemRefs" >
      {{ item.innerHTML }}
    </li>
  </ul>
</template>

<style scoped></style>