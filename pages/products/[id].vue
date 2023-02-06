<template>
  <Head>
    <Title> Nuxt-project | {{ product.title }} </Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <ProductDetails :product="product"/>
</template>

<script setup>
  const  { id } = useRoute().params;
  const { data: product } = await useFetch('https://fakestoreapi.com/products/' + id, { key: id });

  if(!product.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
      fatal: true,
    })
  }

  definePageMeta({
    layout: 'products'
  })
</script>
