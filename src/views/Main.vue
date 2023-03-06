<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView, useRouter } from 'vue-router'
const router = useRouter();
let drawer = ref(true)

const routerTo = (rout) => {
    router.push(rout)
}
</script>

<template>
    <v-card>
        <v-layout>
            <v-app-bar color="primary">
                <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"> </v-app-bar-nav-icon>
                <v-toolbar-title>Изучаем Vue</v-toolbar-title>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer">
                <v-list>
                    <v-list-item @click="routerTo('/')">Синтаксис шаблонов</v-list-item>
                    <v-list-item @click="routerTo('/reactivity')">Реактивность</v-list-item>
                    <v-list-item @click="routerTo('/computed')">Свойство computed</v-list-item>
                    <v-list-item @click="routerTo('/binding')">Связывание стилей и классов</v-list-item>
                    <v-list-item @click="routerTo('/condition')">Условная отрисовка </v-list-item>
                    <v-list-item @click="routerTo('/list')">Отрисовка списков </v-list-item>
                    <v-list-item @click="routerTo('/events')">Обработчики событий</v-list-item>
                    <v-list-item @click="routerTo('/form-binding')">Связывание форм</v-list-item>
                    <v-list-item @click="routerTo('/hooks')">Хуки жизненного цикла</v-list-item>
                    <v-list-item @click="routerTo('/watch')">Наблюдатели</v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="min-height: 100vh;" class=" ma-8">
                <RouterView />
            </v-main>
        </v-layout>
    </v-card>
</template>