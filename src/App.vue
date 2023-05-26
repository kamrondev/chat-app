<script setup lang="ts">

import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
</script>

<template>
  <AppHeader />
  <div class="wrapper">
    <AppSidebar />
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: grid;
  grid-template-columns: 288px 1fr;
}
</style>