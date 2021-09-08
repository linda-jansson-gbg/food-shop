<template>
  <div>
    <Product v-for="(product, index) in products" :key="index" />
  </div>
</template>

<script>
import Product from './Product.vue';
export default {
  props: {
    products: Array,
  },
  components: {
    Product,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
