<template>
  <div class="main">
    <img src="@/assets/logo.svg" alt="Logo" @click="$emit('changeView', 'products')" />
    <h1>food shop</h1>
    <div class="cart" @click="$emit('changeView', 'cart')">
      <i class="material-icons">shopping_cart</i>
      <div class="cart-count">{{ cartCount }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    cartCount() {
      if (!this.cart?.length) return 0;
      return this.cart.reduce((total, item) => {
        return item.amount + total;
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Italiana&display=swap');
h1 {
  font-family: 'Italiana', sans-serif;
  color: white;
}
div.main {
  background-color: #020203;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  position: sticky;
  top: 0;
  img {
    max-height: 100%;
    cursor: pointer;
  }
}
div.cart {
  cursor: pointer;
  position: relative;
  padding: 1rem;
  border: 2px solid #f2f2f2;
  border-radius: 50%;
  i {
    color: #f2f2f2;
  }
  div {
    position: absolute;
    width: 30px;
    height: 30px;
    right: -10px;
    top: -10px;
    line-height: 0;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
