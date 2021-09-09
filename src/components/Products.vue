<template>
  <div class="products">
    <Product v-for="(product, index) in products" :key="index" v-bind:product="product" />
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

<style lang="scss" scoped>
.products {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
@media only screen and (max-width: 1000px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media only screen and (max-width: 500px) {
  .products {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
