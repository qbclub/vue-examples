<script setup>
import { ref } from 'vue'
import ButtonCounter from './ButtonCounter.vue'
import BlogPost from './BlogPost.vue'
import AlertBox from './AlertBox.vue'

const posts = ref([
  { id: 1, title: 'My journey with Vue' },
  { id: 2, title: 'Blogging with Vue' },
  { id: 3, title: 'Why Vue is so fun' }
])

const postFontSize = ref(1)

</script>

<template>
  <h2 class="text-center">Основы компонентов</h2>
  <v-divider class="ma-4"></v-divider>
  <h4>Понимание компоненты </h4>
  <v-divider class="ma-4"></v-divider>
  <h4>Использование компоненты </h4>
  <p>Вот тут дочерняя компонента!</p>
  <ButtonCounter />
  <v-divider class="ma-4"></v-divider>
  <h4>Передача props</h4>
  <div class="d-flex">
    <BlogPost title="Я учу VUE" />
    <BlogPost title="Мой отдых" />
    <BlogPost title="VUE великолепен" />
  </div>
  <v-divider class="ma-4"></v-divider>
  <p>используем v-for</p>
  <div class="d-flex">
    <BlogPost v-for="post in posts" :key="post.id" :title="post.title" />
  </div>
  <v-divider class="ma-4"></v-divider>
  <h4>Прослушивание событий </h4>
  <div class="d-flex" :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost v-for="post in posts" :key="post.id" :title="post.title" @enlarge-text="postFontSize += 0.1" />
  </div>
  <v-divider class="ma-4"></v-divider>
  <h4>Доставка контента со Slots</h4>
  <AlertBox>
    <p>Произошло что-то плохое</p>
  </AlertBox>
</template>