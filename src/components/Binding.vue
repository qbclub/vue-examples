<script setup>
import { reactive, ref, computed } from 'vue'

const isActive = ref(true)
// 
const activeColor = ref('red')
const fontSize = ref(30)


</script>
<template>
    <h2 class="text-center">Class and Style Bindings</h2>
    <v-divider class="ma-4"></v-divider>
    <h4>Binding to Objects</h4>
    <div :class="{ active: isActive }" class="box" @click="isActive = !isActive"></div>
    <v-divider class="ma-4"></v-divider>
    <h4>Binding Inline Styles</h4>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">Красный текст 30px</div>
</template>
<style scoped>
.box {
    width: 50px;
    aspect-ratio: 1;
    border-radius: solid 1px black;
    background: green;
}

.active {
    background: red;
}
</style>