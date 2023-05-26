<script setup lang="ts">
import AppChatList from "@/components/AppChatList.vue";
</script>

<template>
  <div class="wrapper">
    <AppChatList />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 480px 1fr;
}
</style>