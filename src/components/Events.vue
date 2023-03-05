<script setup>
import { reactive, ref, computed } from 'vue'

const count = ref(0)
const name = ref('Vue.js')
let text = ref('')
function greet(event) {
    alert(`Hello ${name.value}!`)
}
function say(message) {
    alert(message)
}
function submit(){
    alert (text.value)
}

</script>
<template>
    <h2 class="text-center">Обработка событий</h2>
    <v-divider class="ma-4"></v-divider>
    <h4>Встроенные обработчики</h4>
    <v-btn @click="count++">Add 1</v-btn>
    <p>Count is: {{ count }}</p>
    <v-divider class="ma-4"></v-divider>
    <h4>Method Handlers</h4>
    <v-btn @click="greet">Приветствовать </v-btn>
    <v-divider class="ma-4"></v-divider>
    <h4>Вызов метода во встроенном обработчике</h4>
    <v-btn @click="say('hello')">Say hello</v-btn>
    <v-btn @click="say('bye')">Say bye</v-btn>
    <v-divider class="ma-4"></v-divider>
    <h4>Key Modifiers</h4>
    <v-text-field label="Текст" v-model="text"  @keyup.enter="submit"></v-text-field>

</template>
<style scoped></style>