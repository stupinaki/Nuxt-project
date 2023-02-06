<template>
  <div class="products-container">
    <header class="header">
        <NuxtLink to="/products"> Back to products </NuxtLink>
    </header>
    <div class="slot-container">
      <slot/>
    </div>
    <FooterComponent/>
  </div>
</template>

<style scoped>
  nav {
    padding: 20px 0;
  }
  nav a {
    font-size: 20px;
    cursor: pointer;
  }
  nav a:hover {
    text-decoration: underline;
  }
  .products-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  .slot-container {
    height: 100%;
    padding: 20px 40px;
  }
  .header {
    background-color: #fff;
    box-shadow: 1px 1px 3px #aaaaaa;
    padding: 20px 40px;
    font-size: 20px;
  }
</style>