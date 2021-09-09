<template>
  <div>
    <img :src="product.img" alt="" />
    <p>{{ product.name }}</p>
    <p>{{ product.price }} kr</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style lang="scss" scoped></style>
