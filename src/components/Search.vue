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
      page: 1,
      query: 'catoolin'
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.query, this.page);
      this.$router.push('/page/${this.page}');
    }
  }
}
</script>
