<template>
  <div class="card">
    <div class="img-container">
      <img :src="product.image" alt="product image" class="img">
    </div>

    <div class="details">
      <h2 class="title">{{ product.title }}</h2>
      <p>{{ product.description }}</p>
      <p class="price"> Price: {{ product.price }} $</p>

      <button class="add-btn" type="button">
        <i class="material-icons"> add_shopping_cart </i>
        Add to cart
      </button>
    </div>
  </div>
</template>

<script setup>
const {product} = defineProps(['product']);

</script>

<style scoped>
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 12px;
    border: none;
    box-shadow: 1px 1px 3px #aaaaaa;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .details {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: start;
    justify-content: start;
  }
  .price {
    font-weight: bold;
  }
  .img-container {
    margin: 0 auto;
    max-width: 400px;
  }
  .img {
    max-width: 100%;
  }
  .add-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 16px;
    border-radius: 16px;
    border: none;
    background-color: #36e4da;
    box-shadow: 1px 1px 3px #aaaaaa;
    cursor: pointer;
  }
  .add-btn:hover {
    background-color: #36e4daCC;
  }

  @media screen and (max-width: 600px) {
    .card {
      display: flex;
      flex-direction: column;
    }
    .img-container {
      margin: 0 auto;
      max-width: 200px;
    }
  }
</style>