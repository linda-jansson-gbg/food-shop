<template>
  <div id="app">
    <Menu v-bind:cart="cart" />
    <Products v-bind:products="products" @updateCart="updateCart" />
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
      currentView: 'products',
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
    updateCart(id) {
      const product = this.products.find((p) => p.id === id);
      console.log(product);
      const exists = this.cart.find((p) => p.id === id);
      if (!exists) {
        this.cart.push({ ...product, amount: 1 });
      } else {
        exists.amount++;
      }
      console.log('Cart: ', this.cart);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
* {
  box-sizing: border-box;
}
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-family: 'Raleway', sans-serif;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
