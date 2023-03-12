<template>
    <div class="alert-box">
        <strong>"Это ошибка демонстрации"</strong>
        <slot />
    </div>
</template>
  
<style scoped>
.alert-box {
    display: inline-block;

    margin: 20px;
    padding: 20px;
    border-radius: 25px;
    border: 1px solid red;
}
</style>