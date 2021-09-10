@@ -1,9 +1,55 @@
<template>
  <div>
    <input type="text" v-model="input" placeholder="Search" />
    <i class="material-icons">search</i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.input);
    },
  },
  watch: {
    input() {
      this.handleSearch();
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: #ccc;
  position: relative;
  padding: 1rem;
  display: flex;
  margin-bottom: 1rem;
  input {
    width: 100%;
    height: 30px;
    appearance: none;
    border: none;
    outline: none;
    border-radius: 999px;
    padding: 0 0.5rem;
  }
  i {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    right: 1.5rem;
    pointer-events: none;
  }
}
</style>
