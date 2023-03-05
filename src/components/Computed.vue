<script setup>
import { reactive, ref, computed } from 'vue'
const author = reactive({
    name: 'John Doe',
    books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})
// const publishedBooksMessage = computed(() => {
//   return author.books.length > 0 ? 'Да' : 'Нет'
// })


</script>
<template>
    <h2 class="text-center">Computed</h2>
    <v-divider class="ma-4"></v-divider>
    <p>У автора есть книги?</p>
    <span>{{ author.books.length > 0 ? 'Да' : 'Нет' }}</span>
    <!-- <span>{{publishedBooksMessage }}</span> -->
</template>