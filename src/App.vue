<template>
  <div id="app">
    <Menu v-bind:cart="cart" @changeView="changeView" />
    <Products
      v-if="currentView === 'products'"
      v-bind:products="products"
      @updateCart="updateCart"
      @changeView="changeView"
    />
    <Detail v-if="currentView === 'detail'" v-bind:product="product" />
    <Cart
      v-if="currentView === 'cart'"
      v-bind:cart="cart"
      @increment="handleIncrement"
      @decrement="handleDecrement"
      @removeItem="removeFromCart"
      @changeView="changeView"
    />
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
      product: {},
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
      const exists = this.cart.find((p) => p.id === id);
      if (!exists) {
        this.cart.push({ ...product, amount: 1 });
      } else {
        exists.amount++;
      }
      console.log('Cart: ', this.cart);
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((product) => product.id !== id);
    },
    changeView(view, id) {
      if (view === 'detail') {
        const product = this.products.find((p) => p.id === id);
        this.product = product;
      }
      this.currentView = view;
    },
    handleIncrement(id) {
      const product = this.cart.find((p) => p.id === id);
      product.amount++;
    },
    handleDecrement(id) {
      const product = this.cart.find((p) => p.id === id);
      if (product.amount > 1) product.amount--;
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
  font-family: 'Raleway', sans-serif;
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
