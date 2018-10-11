<template>
  <div class="Repositories">
    <div class="Repo" v-for="repo in repositories" v-if="repositories">
      <a :href="repo.url" class="Repo__title">{{ repo.title }}</a>
      <small>{{ repo.lang }}</small>
      <div class="Repo__url">{{ repo.url }}</div>
      <div class="Repo__snippet" v-html="repo.about"></div>
    </div>
    <div class="jumbotron text-center" v-else>
        <h3>Loading...</h3>
    </div>
    <nav aria-label="...">
      <ul class="pager">
        <li :class="previousFirst" @click="previous"><router-link :to="{name: 'page', params: { id: Number(page) - 1 } }" @click="previous">Previous</router-link></li>
        <li :class="nextCheck" @click="next"><router-link :to="{name: 'page', params: { id: Number(page) + 1 } }" @click="next">Next</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    methods: {
      next() {
        var args = {
          query: this.args.query,
          page: Number(this.args.page) + 1
        };
        this.$store.dispatch('search', args);
        // this.$router.push('/page/' + args.page);

      },
      previous() {
        var args = {
          query: this.args.query,
          page: Number(this.args.page) - 1
        };
        this.$store.dispatch('search', args);
        // this.$router.push('/page/' + args.page);

      }
    },
    computed: {
      page() {
        return this.$route.params.id;
      },
      args() {
        return this.$store.getters.args;
      },
      repositories() {
        return this.$store.getters.repositories;
      },
      previousFirst() {
        return (this.page == 1) ? 'disabled' : 'works';
      },
      nextLast() {
        return (this.page == 10) ? 'disabled' : 'works';
      },
      nextCheck() {
        if (this.page !== 10) {

          if (this.repositories.length <= 100 && this.repositories.length * Number(this.page) >= this.args.count) {
            return 'disabled';
          } else {
            return 'works';
          }
        }
        return 'disabled';
      }
    }
  }
</script>
