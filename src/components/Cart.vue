<template>
  <div>
    <ul>
      <li v-for="item in cart" :key="item.id">
        <div class="image">
          <img :src="item.img" alt="" />
        </div>
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="price">{{ item.price }} kr</span>
        </div>
        <Counter :count="item.amount" @decrement="handleDecrement(item.id)" @increment="handleIncrement(item.id)" />
        <div class="total">
          <span>Totalt</span>
          <span class="total">{{ totalCost(item.price, item.amount) }}</span>
        </div>
      </li>
    </ul>
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
}
li:not(:first-of-type) {
  margin-top: 1rem;
}
@media only screen and (max-width: 600px) {
  li {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    div.image {
      justify-self: center;
      grid-column: 1 / 2;
    }
    article {
      justify-content: center;
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
