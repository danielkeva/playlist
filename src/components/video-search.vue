<template>
  <div class="video-search">
    <input type="text" v-model="keywords" />
    <button @click="emitKeywords">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: ''
    }
  },
  methods: {
    emitKeywords() {
      this.$emit('search', this.keywords)
    }
  }
}
</script>

<style lang="scss" >
.video-search {
  margin-bottom: 20px;
  input[type="text"] {
    margin-right: 10px;
    padding: 5px 10px;
    font-size: 0.9rem;
    max-width: 400px;
  }
  button {
    align-self: flex-start;
    border: 1px solid rgb(70, 112, 205);
    color: rgb(70, 112, 205);
    background: none;
    padding: 10px 30px;
    border-radius: 10px;
    cursor: pointer;
    outline: none;
    &:hover {
      color: #fff;
      background-color: rgb(70, 112, 205);
    }
  }
}
</style>