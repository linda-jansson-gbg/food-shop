<template>
  <div id="app">
    <Menu v-bind:cart="cart" />
    <Products v-bind:products="products" />
    <Detail />
    <Cart v-bind:cart="cart" />
    <Payment />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Products from './components/Products.vue';
import Detail from './components/Detail.vue';
import Cart from './components/Cart.vue';
import Payment from './components/Payment.vue';

export default {
  components: {
    Menu,
    Products,
    Detail,
    Cart,
    Payment,
  },
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  methods: {
    async getData() {
      const response = await fetch('/api');
      const data = await response.json();
      if (data.success) {
        this.products = data.data;
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
