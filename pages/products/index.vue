<template>
    <div>
      <div class="product-cards">
        <div
            v-for="product in products"
            :key="product.id"
            class="product-card"
        >
          <ProductCard
              :product="product"
          />
        </div>
      </div>
    </div>
</template>

<script setup>
  const { data: products } = await useFetch('https://fakestoreapi.com/products');

  useHead({
    title: "Nuxt-project | some new title for products"
  })
</script>

<style scoped>
  .product-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
</style>