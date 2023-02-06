<template>
  <div class="footer">
    <ul>
      <li> <NuxtLink to="/"> Home </NuxtLink> </li>
      <li> <NuxtLink to="/about"> About </NuxtLink> </li>
      <li> <NuxtLink to="/products"> Products </NuxtLink> </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 0;
  margin: 0 0 0 40px;
}
ul li {
  list-style-type: none;
  font-size: 20px;
  padding: 20px 0;
}
ul li a {
  text-decoration: none;
  color: #303030;
}
ul li a:hover {
  text-decoration: underline;
  color: #000000;
}

.footer {
  background-color: #fff;
  box-shadow: 1px 1px 3px #aaaaaa;
}

</style>