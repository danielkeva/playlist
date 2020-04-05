<template>
  <div>
    <input type="search" v-model="keywords" />
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

<style>
</style>