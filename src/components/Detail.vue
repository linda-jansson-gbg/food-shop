<template>
  <section>
    <article class="detail">
      <img :src="product.img" alt="" />
      <h1>{{ product.name }}</h1>
      <footer>
        <p>{{ product.price }} kr</p>
        <Counter :count="amount" @decrement="decrement()" @increment="amount++" />
        <!--<button class="addToCartButton" @click="$emit('updateCart', product.id, amount)">-->
        <button class="addToCartButton" @click="updateCartAndAmount">
          <i class="material-icons">shopping_cart</i>
        </button>
      </footer>
    </article>
  </section>
</template>

<script>
import Counter from './Counter.vue';
export default {
  props: {
    product: Object,
    cart: Array,
  },
  data() {
    return {
      amount: 0,
    };
  },
  components: {
    Counter,
  },
  methods: {
    getAmount() {
      const product = this.cart.find((p) => p.id === this.product.id);
      if (product) {
        this.amount = product.amount;
      }
    },
    decrement() {
      if (this.amount > 0) {
        this.amount--;
      }
    },
    updateCartAndAmount() {
      const payload = {
        id: this.product.id,
        amount: this.amount,
      };
      if (this.amount > 0) {
        this.$emit('updateCartAndAmount', payload);
      }
    },
  },
  created() {
    this.getAmount();
  },
};
</script>

<style lang="scss" scoped>
section {
  padding: 1rem;
}
article.detail {
  padding: 1rem;
  border: 1px solid #ccc;
}
img {
  width: 100%;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
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
