<template>
  <div class="Search">
    <input type="text" class="Search__input" v-model="query" @keyup.enter="search">
    <button class="Search__button" @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.query);
    }
  }
}
</script>
