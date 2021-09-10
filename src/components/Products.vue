@@ -1,13 +1,16 @@
<template>
  <main>
    <span class="sort" @click="$emit('sort')" v-html="sorting"></span>
    <div class="products">
      <Product
        v-for="(product, index) in products"
        :key="index"
        v-bind:product="product"
        @updateCart="updateCart"
        @goToDetailView="goToDetailView"
      />
    </div>
  </main>
</template>

<script>
import Product from './Product.vue';
export default {
  props: {
    products: Array,
    sort: String,
  },
  components: {
    Product,
  },
  data() {
    return {};
  },
  methods: {
    updateCart(id) {
      this.$emit('updateCart', id);
    },
    goToDetailView(id) {
      this.$emit('changeView', 'detail', id);
    },
  },
  computed: {
    sorting() {
      if (this.sort === 'name') {
        return 'Sort by: <u>name</u> / price';
      } else {
        return 'Sort by: name / <u>price</u>';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
span.sort {
  margin-left: 1rem;
  cursor: pointer;
  user-select: none;
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
