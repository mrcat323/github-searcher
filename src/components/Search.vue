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
      var args = {
        query: this.query,
        page: this.page
      };
      this.$store.dispatch('search', args);
      // console.log(this.page);
      this.$router.push('/page/1');
    }
  }
}
</script>
