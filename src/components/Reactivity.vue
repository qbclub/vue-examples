<script setup>
import { reactive, ref } from 'vue'
// 
const state = reactive({ count: 0 })
function increment() {
    state.count++
    count.value++
}
// 
const obj = reactive({
    nested: { count: 0 },
    arr: ['foo', 'bar']
})
function mutateDeeply() {
    obj.nested.count++
    obj.arr.push('baz')
}
// 
const count = ref(0)

console.log(count) // { value: 0 }
console.log(count.value) // 0

count.value++
console.log(count.value) // 1

</script>
<template>
    <h2 class="text-center">Реактивность</h2>
    <v-divider class="ma-4"></v-divider>
    <h4>Создание реактивного объекат</h4>
    <v-btn @click="increment">
        {{ state.count }}
    </v-btn>
    <v-divider class="ma-4"></v-divider>
    <h4>Глубина реактивности</h4>
    <v-btn @click="mutateDeeply">
        Поменяй состояние
    </v-btn> <br>
    {{ obj }}
    <v-divider class="ma-4"></v-divider>
    <h4>Реактивность переменных - ref()</h4>
    {{ count }}
    <v-divider class="ma-4"></v-divider>
</template>