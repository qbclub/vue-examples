<script setup>
let msg = "привет"
let rawHtml = "<h6>Большой привет</h6>"
let color = "green"
let number = 11
let ok = false
let message = "слон"
let seen = true
let url = "https://google.com"
</script>

<template>
    <h2 class="text-center">Синтаксис шаблонов</h2>
    <v-divider class="ma-4"></v-divider>
    <h4>Выведение текста</h4>
    <span>Говорим: {{ msg }}</span>
    <v-divider class="ma-4"></v-divider>

    <h4>Выведение  HTML</h4>
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
    <v-divider class="ma-4"></v-divider>

    <h4>Связывание атрибутов</h4>
    <div :id="color">Зеленый привет</div>
    <v-divider class="ma-4"></v-divider>

    <h4>Используем JavaScript</h4>
    {{ number + 1 }} <br>
    {{ ok ? 'YES' : 'NO' }} <br>
    {{ message.split('').reverse().join('') }}
    <v-divider class="ma-4"></v-divider>
    <h4>Директивы</h4>
    <p v-if="seen">Now you see me</p>
    <a v-bind:href="url"> иди туда </a>

</template>
<style scoped>
#green {
    color: green;
}
</style>