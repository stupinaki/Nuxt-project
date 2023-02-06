<template>
  <div class="product-card">
    <div class="img-container">
      <img :src="product.image" alt="product image" class="img">
    </div>

    <div class="info">
      <h3 class="title">{{ product.title }}</h3>

      <NuxtLink
          :to="`/products/${product.id}`"
          class="link"
      >
        More details
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const {product} = defineProps(['product']);

</script>

<style scoped>
  .product-card {
    display: grid;
    grid-template-rows: 1fr 1fr;
    padding: 12px;
    background-color: #fff;
    border-radius: 12px;
    border: none;
    box-shadow: 1px 1px 3px #aaaaaa;
  }
  .img-container {
    max-width: 240px;
    margin: 20px;
  }
  .img {
    max-height: 120px;
    margin: 0 auto;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin: 20px 0;
  }
  .link {
    text-align: end;
    text-decoration: none;
    color: #000;
  }
  .link:hover {
    text-decoration: underline;
  }
</style>