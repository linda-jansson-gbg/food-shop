<template>
  <article>
    <img :src="product.img" id="detailButton" @click="$emit('goToDetailView', product.id)" alt="" />
    <footer>
      <div class="product-info">
        <p>{{ product.name }}</p>
        <p>{{ product.price }} kr</p>
      </div>
      <button id="addToCartButton" @click="$emit('updateCart', product.id)">
        <i class="material-icons">shopping_cart</i>
      </button>
    </footer>
  </article>
</template>

<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
article {
  padding: 1rem;
  border: 1px solid #ccc;
}
img {
  width: 100%;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
footer p {
  margin-bottom: 0;
}
.material-icons {
  background-color: black;
  border-radius: 2rem;
  padding: 0.5rem;
  color: white;
}
button {
  border: none;
  background: none;
}
span {
  display: none;
}
</style>
