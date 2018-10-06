<template>
  <div class="Search">
    <input type="text" class="Search__input" v-model="query" @keyup.enter="search">
    <button class="Search__button" @click="search"><i class="fa fa-search"></i></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: 'catoolin'
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.query);
      this.$router.push('/page');
    }
  }
}
</script>
