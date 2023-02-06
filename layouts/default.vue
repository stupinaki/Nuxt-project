<template>
  <HeaderComponent/>
  <div class="default-layout-slot">
    <slot/>
  </div>
</template>

<style scoped>
  .default-layout-slot {
    padding: 0 40px;
  }
</style>