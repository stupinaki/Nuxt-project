<template>
  <div class="error">
    <div class="status-code"> {{ error.statusCode }} </div>
    <div> Ooops..</div>
    <div class="message"> {{ error.message }} </div>

    <NuxtLink to="/" class="link">
      Home page
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps(['error']);
</script>

<style scoped>
  .error {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  .status-code {
    font-weight: bold;
    font-size: 40px;
  }
  .message {
    font-size: 32px;
  }
  .link {
    color: #12b488;
    font-size: 20px;
  }
  .link:hover {
    text-decoration: underline;
  }
</style>

