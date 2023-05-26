<template>
  <header class="header">
    <RouterLink to="/">
      <img src="/logo.svg" alt="logo" class="header__logo">
    </RouterLink>
  </header>
</template>

<style scoped lang="scss">
@import "@/assets/_variables";
.header {
  width: 100%;
  border-bottom: 1px solid $gray-primary;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 28px 32px;
}
</style>