<template>
  <article>
    <i class="material-icons decrement" @click="$emit('decrement')">remove</i>
    <div class="count">{{ count }}</div>
    <i class="material-icons increment" @click="$emit('increment')">add</i>
  </article>
</template>

<script>
export default {
  props: {
    count: Number,
  },
};
</script>

<style lang="scss" scoped>
article {
  display: flex;
  align-items: center;
  i {
    cursor: pointer;
  }
}
div.count {
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
}
</style>
