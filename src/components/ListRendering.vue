<script setup>
import { reactive, ref, computed } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
// 
const myObject = reactive({
   title: 'How to do lists in Vue',
   author: 'Jane Doe',
   publishedAt: '2016-04-10'
})
const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
   return numbers.value.filter((n) => n % 2 === 0)
})



</script>
<template>
   <h2 class="text-center">Отрисовка списков</h2>
   <v-divider class="ma-4"></v-divider>
   <h4>v-for</h4>
   <li v-for="item in items">
      {{ item.message }}
   </li>
   <v-divider class="ma-4"></v-divider>
   <h4>v-for with an Object</h4>
   <ul>
      <li v-for="(value, key) in myObject">
         {{ key }}: {{ value }}
      </li>
   </ul>
   <v-divider class="ma-4"></v-divider>
   <h4>v-for with a Range</h4>
   <span v-for="n in 10">{{ n }}</span>
   <v-divider class="ma-4"></v-divider>
   <h4>v-for on template </h4>
   <ul>
      <template v-for="item in items">
         <li>{{ item.message }}</li>
      </template>
   </ul>
   <v-divider class="ma-4"></v-divider>
   <h2 class="text-center">Array Change Detection</h2>
   <h4>Displaying Filtered/Sorted Results</h4>
   <ul>
      <li v-for="n in evenNumbers">{{ n }}</li>
   </ul>
</template>
<style scoped></style>