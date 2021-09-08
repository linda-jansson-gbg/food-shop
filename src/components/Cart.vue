<template>
  <div>
    <ul>
      <li v-for="item in cart" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
};
</script>

<style lang="scss" scoped></style>
