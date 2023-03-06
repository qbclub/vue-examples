<script setup>
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Слово меньше 5 символов')
// 
const todoId = ref(1)
const data = ref(null)


// watch works directly on a ref
watch(question, async (newQuestion, oldQuestion) => {
    let length = question.value.split('').length
    if (length > 5) {
        answer.value = `В слове ${length} букв`
    } else {
        answer.value = 'Слово меньше 5 символов'
    }

})

// 
watchEffect(async () => {
    let length = question.value.split('').length
    data.value = length
})



</script>

<template>
    <h2 class="text-center">Watchers</h2>
    <v-divider class="ma-4"></v-divider>
    <h4>Basic Example</h4>
    <p>
        Сколько в слове букв?
        <v-text-field v-model="question" />
    </p>
    <p>{{ answer }}</p>
    <v-divider class="ma-4"></v-divider>
    <h4>watchEffect()</h4>
    {{ data }}
</template>