<template>
  <div id="app">
    <Menu v-bind:cart="cart" @changeView="changeView" />
    <Search v-if="currentView === 'products'" @search="handleSearch" />
    <Products
      v-if="currentView === 'products'"
      v-bind:products="searchProducts"
      @updateCart="updateCart"
      @changeView="changeView"
      @sort="handleSort"
      v-bind:sort="sort"
    />
    <Detail
      v-if="currentView === 'detail'"
      v-bind:product="product"
      v-bind:cart="cart"
      @updateCartAndAmount="updateCartAndAmount"
      @removeItem="removeFromCart"
      @changeView="changeView"
    />
    <Cart
      v-if="currentView === 'cart'"
      v-bind:cart="cart"
      @increment="handleIncrement"
      @decrement="handleDecrement"
      @removeItem="removeFromCart"
      @changeView="changeView"
    />
    <Payment v-if="currentView === 'payment'" v-bind:cart="cart" @changeView="changeView" @emptyCart="emptyCart" />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Products from './components/Products.vue';
import Detail from './components/Detail.vue';
import Cart from './components/Cart.vue';
import Payment from './components/Payment.vue';
import Search from './components/Search.vue';

export default {
  components: {
    Menu,
    Products,
    Detail,
    Cart,
    Payment,
    Search,
  },
  data() {
    return {
      products: [],
      searchProducts: [],
      cart: [],
      currentView: 'products',
      product: {},
      sort: 'name',
    };
  },
  methods: {
    async getData() {
      const response = await fetch('/api');
      const data = await response.json();
      if (data.success) {
        this.products = data.data;
        this.searchProducts = [...this.products];
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
    },
    updateCartAndAmount(payload) {
      const product = this.products.find((p) => p.id === payload.id);
      const exists = this.cart.find((p) => p.id === payload.id);
      if (!exists) {
        this.cart.push({ ...product, amount: payload.amount });
      } else {
        exists.amount = payload.amount;
      }
    },
    removeFromCart(id) {
      this.cart = this.cart.filter((product) => product.id !== id);
    },
    changeView(view, id) {
      if (view === 'detail') {
        const product = this.products.find((p) => p.id === id);
        this.product = product;
      }
      if (view === 'products') {
        this.searchProducts = this.products;
        this.sortProducts();
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
    handleSearch(input) {
      const re = new RegExp(input, 'i');
      this.searchProducts = this.products.filter((product) => product.name.match(re));
      this.sortProducts();
    },
    handleSort() {
      if (this.sort === 'name') {
        this.sort = 'price';
      } else {
        this.sort = 'name';
      }
      this.sortProducts();
    },
    sortProducts() {
      if (this.sort === 'name') {
        this.searchProducts = this.searchProducts.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
      } else {
        this.searchProducts = this.searchProducts.sort((a, b) => (a.price > b.price ? 1 : b.price > a.price ? -1 : 0));
      }
    },
    emptyCart() {
      this.cart = [];
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
body {
  max-width: 100%;
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
