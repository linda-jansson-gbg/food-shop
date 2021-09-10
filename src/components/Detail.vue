<template>
  <section>
    <article class="header">
      <button @click="$emit('changeView', 'products')">
        <i class="material-icons">arrow_back</i>
        Return to products
      </button>
      <h1>{{ product.name.toUpperCase() }}</h1>
    </article>
    <article class="detail">
      <img :src="product.img" alt="" />
      <h1 class="title">{{ product.name }}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quas sit eaque labore, sed quaerat? Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Nobis iure iste, quod hic adipisci voluptates maxime ad
        fugit fuga aliquid!
      </p>
      <footer>
        <p>{{ product.price }} kr</p>
        <Counter :count="amount" @decrement="handleDecrement" @increment="handleIncrement" />
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
    handleDecrement() {
      if (this.amount > 1) {
        this.amount--;
        this.updateCart();
      } else if (this.amount === 1) {
        this.$emit('removeItem', this.product.id);
        this.amount = 0;
      }
    },
    handleIncrement() {
      this.amount++;
      this.updateCart();
    },
    updateCart() {
      const payload = {
        id: this.product.id,
        amount: this.amount,
      };
      if (this.amount > 0) {
        this.$emit('updateCartAndAmount', payload);
      }
      this.$emit('updateCartAndAmount', payload);
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
  display: grid;
}
img {
  width: 100%;
  max-width: 400px;
  justify-self: center;
}
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
}
button {
  border: none;
  display: flex;
  align-items: center;
  appearance: none;
  outline: none;
  background: none;
  border: 1px solid #ccc;
  cursor: pointer;
  i {
    margin-right: 0.2rem;
    color: #333;
  }
}
article.header {
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  button {
    margin-right: 2rem;
  }
  h1 {
    margin: 0;
  }
}
</style>
