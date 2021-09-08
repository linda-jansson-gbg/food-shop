<template>
  <div class="main">
    <img src="@/assets/logo.svg" alt="Logo" />
    <div class="cart">
      <i class="material-icons">shopping_cart</i>
      <div class="cart-count">0</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
div.main {
  background-color: #020203;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  img {
    max-height: 100%;
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
    width: 20px;
    height: 20px;
    right: 0px;
    top: 0;
    background-color: #f2f2f2;
    border-radius: 50%;
    display: grid;
    place-items: center;
  }
}
</style>
