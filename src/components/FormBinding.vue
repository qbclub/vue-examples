<script setup>
import { reactive, ref, computed } from 'vue'

let message = ref('')
let checked = ref(true)
let picked = ref('')
let selected = ref('A')
let multySelected = ref([])

</script>
<template>
    <h2 class="text-center">Связывание форм </h2>
    <v-divider class="ma-4"></v-divider>
    <h4>Text</h4>
    <p>Message is: {{ message }}</p>
    <v-text-field label="пиши тут" v-model="message"></v-text-field>
    <v-divider class="ma-4"></v-divider>
    <h4>Checkbox</h4>
    <input type="checkbox" id="checkbox" v-model="checked" />
    <p>{{ checked }}</p>
    <v-divider class="ma-4"></v-divider>
    <h4>Radio</h4>
    <div>Picked: {{ picked }}</div>
    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>
    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>
    <v-divider class="ma-4"></v-divider>
    <h4>Select</h4>
    <div>Selected: {{ selected }}</div>
    <select v-model="selected" style="border: 1px solid black">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>

    <v-divider class="ma-4"></v-divider>
    <div>Selected: {{ multySelected }}</div>
    <select v-model="multySelected" multiple>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
</template>
<style scoped></style>