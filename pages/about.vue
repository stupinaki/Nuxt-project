<template>
  <div class="about-container">
    <h2 class="title"> Some Information About Us</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex diam,
      imperdiet sit amet malesuada ac, molestie a erat. Praesent rutrum rhoncus ultrices.
      Nunc nibh neque, pulvinar vel condimentum quis, ornare ac neque. Mauris venenatis
      mauris finibus erat bibendum finibus. Donec eget vehicula est, et maximus tortor.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ex diam, imperdiet
      sit amet malesuada ac, molestie a erat. Praesent rutrum rhoncus ultrices. Nunc nibh neque,
      pulvinar vel condimentum quis, ornare ac neque. Mauris venenatis mauris finibus erat bibendum
      finibus. Donec eget vehicula est, et maximus tortor.
    </p>
    data: {{data}}
  </div>
</template>

<script setup>
  const data = await useFetch('/api/someServerRouts');
</script>

<style scoped>
   .about-container {
     display: flex;
     flex-direction: column;
     gap: 20px;
     margin: 20px 0;
   }
   .title {
     font-size: 20px;
     font-weight: bold;
   }
</style>