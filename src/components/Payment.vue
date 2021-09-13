<template>
  <section>
    <article class="header">
      <button @click="$emit('changeView', 'cart')">
        <i class="material-icons">arrow_back</i>
        Return to cart
      </button>
      <h1>CHECKOUT</h1>
    </article>
    <article class="form">
      <div class="form">
        <span>Cardholder's name</span>
        <input type="text" v-model="cardName" v-mask="mask" placeholder="Firstname Lastname" />
        <span class="error" v-if="errors.name"><i class="material-icons">error</i>Cannot be empty</span>
        <span>Card number</span>
        <input type="text" v-model="cardNumber" v-mask="'#### #### #### ####'" placeholder="XXXX XXXX XXXX XXXX" />
        <span class="error" v-if="errors.number"><i class="material-icons">error</i>Needs to contain 16 digits</span>
        <span>Valid thru</span>
        <input type="text" v-model="cardValid" v-mask="'##/##'" placeholder="MM/YY" />
        <span class="error" v-if="errors.valid"><i class="material-icons">error</i>Needs to contain 4 digits</span>
        <span>CVV / CVC</span>
        <input type="text" v-model="cardVerification" v-mask="'###'" placeholder="XXX" />
        <span class="error" v-if="errors.verification">
          <i class="material-icons">error</i>Needs to contain 3 digits
        </span>

        <img src="@/assets/payment.png" alt="" />

        <span class="total">Total: {{ total }} kr</span>
        <button class="pay" @click="handlePay">
          <i class="material-icons">credit_card</i>
          Pay
        </button>
      </div>
    </article>
  </section>
</template>

<script>
import { VueMaskDirective } from 'v-mask';

export default {
  directives: {
    mask: VueMaskDirective,
  },
  props: {
    cart: Array,
  },
  computed: {
    total() {
      return this.cart.reduce((total, item) => {
        return item.amount * item.price + total;
      }, 0);
    },
  },
  data() {
    return {
      errors: {
        name: false,
        number: false,
        valid: false,
        verification: false,
      },
      mask: [],
      cardName: '',
      cardNumber: '',
      cardValid: '',
      cardVerification: '',
    };
  },
  methods: {
    handlePay() {
      this.errors.name = !this.cardName ? true : false;
      this.errors.number = this.cardNumber.length !== 19 ? true : false;
      this.errors.valid = this.cardValid.length !== 5 ? true : false;
      this.errors.verification = this.cardVerification.length !== 3 ? true : false;
    },
  },
  mounted() {
    /* Allow max 25 characters with spaces in v-mask on cardName */
    this.mask = Array(25).fill(/[A-Za-z ]/);
  },
};
</script>

<style lang="scss" scoped>
div.form {
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  input {
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    transition: all 0.3s ease-in-out;
  }
  input:focus {
    outline: none;
    border: 1px solid #333;
  }
  span {
    margin-bottom: 0.3rem;
  }
  span:not(:first-of-type) {
    margin-top: 1rem;
  }
  span.error {
    color: #cc0000;
    margin: 0.2rem 0 0 0;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    i {
      font-size: 16px;
      margin-right: 0.2rem;
    }
  }
  img {
    margin-top: 1rem;
    max-width: 100%;
    border: 1px solid #ccc;
  }
  span.total {
    align-self: center;
  }
  button {
    margin-top: 0.5rem;
    align-self: center;
  }
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
section {
  height: 100%;
}
article.header {
  padding: 1rem 1rem 0 1rem;
  display: flex;
  align-items: center;
  button {
    margin-right: 2rem;
  }
}
article.form {
  display: flex;
  justify-content: center;
  padding: 3rem;
}
h1 {
  margin: 0;
}
</style>
