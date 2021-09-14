<template>
  <div>
    <article class="header">
      <button @click="$emit('changeView', 'products')">
        <i class="material-icons">arrow_back</i>
        Return to products
      </button>
      <h1>CART</h1>
    </article>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <div class="image">
          <img :src="item.img" alt="" />
        </div>
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="price">{{ item.price }} kr</span>
        </div>
        <div class="counter">
          <Counter :count="item.amount" @decrement="handleDecrement(item.id)" @increment="handleIncrement(item.id)" />
          <button class="remove" @click="$emit('removeItem', item.id)">
            <i class="material-icons">delete</i>
            Remove
          </button>
        </div>
        <div class="total">
          <span>Total</span>
          <span class="total">{{ totalCost(item.price, item.amount) }}</span>
        </div>
      </li>
      <li v-if="!cart.length" class="empty">Cart is empty</li>
    </ul>
    <div class="summary">
      <span class="subtotal">SUBTOTAL: {{ subtotal }} kr</span><br />
      <span class="taxes">Total taxes ({{ tax * 100 }}%): {{ taxes }} kr</span><br />
      <span class="finalprice">Total: {{ total }} kr</span>
    </div>
    <div class="payment">
      <button v-if="cart.length" class="payment" @click="$emit('changeView', 'payment')">
        <i class="material-icons">payments</i>
        Proceed to checkout
      </button>
    </div>
  </div>
</template>

<script>
import Counter from './Counter.vue';

export default {
  components: {
    Counter,
  },
  props: {
    cart: Array,
  },
  data() {
    return {
      tax: 0.12,
    };
  },
  computed: {
    subtotal() {
      return this.total - this.taxes;
    },
    taxes() {
      return Math.round(this.total * this.tax);
    },
    total() {
      return this.cart.reduce((total, item) => {
        return item.amount * item.price + total;
      }, 0);
    },
  },
  methods: {
    totalCost(price, amount) {
      return price * amount + ' kr';
    },
    handleDecrement(id) {
      this.$emit('decrement', id);
    },
    handleIncrement(id) {
      this.$emit('increment', id);
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin: 0;
}
ul {
  list-style: none;
  padding: 1rem;
  margin: 0;
}
li {
  border: 1px solid #ccc;
  display: grid;
  align-items: center;
  grid-template-columns: min-content 1fr min-content max-content;
  img {
    max-height: 150px;
  }
  div.info,
  div.total {
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
  }
  div.counter {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      margin-top: 1rem;
    }
  }
}
li:not(:first-of-type) {
  margin-top: 1rem;
}
li.empty {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}
button {
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
  padding: 1rem 1rem 0 1rem;
  display: flex;
  align-items: center;
  button {
    margin-right: 2rem;
  }
}
div.summary {
  max-width: 100%;
  border: 1px solid #ccc;
  margin: 0 1rem 1rem;
  padding: 1rem;
  text-align: right;
  span {
    line-height: 1.5em;
  }
}
div.payment {
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
}
@media only screen and (max-width: 600px) {
  li {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    div.image {
      justify-self: center;
      grid-column: 1 / 2;
    }
    div.counter {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
    div.info,
    div.total {
      justify-self: center;
      text-align: center;
      padding: 1rem 0;
    }
  }
}
</style>
