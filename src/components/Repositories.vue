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
        <li class="disabled" v-if="page == 1"><router-link :to="{name: 'page', params: { id: Number(this.page) } }">Previous</router-link></li>
        <li class="works" @click="previous" v-else><router-link :to="{name: 'page', params: { id: Number(this.page) - 1 } }">Previous</router-link></li>
        <li v-if="page !== 10 && status == 'works'" @click="next"><router-link :to="nextCheck">Next</router-link></li>
        <li :class="status" v-else><router-link :to="nextCheck">Next</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        status: 'works'
      }
    },
    methods: {
      next() {
        var args = {
          query: this.args.query,
          page: Number(this.args.page) + 1
        };
        this.$store.dispatch('search', args);
      },
      previous() {
        var args = {
          query: this.args.query,
          page: Number(this.args.page) - 1
        };
        this.$store.dispatch('search', args);
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
      nextCheck() {
        if (this.page !== 10) {
          var pages = Math.ceil(this.args.count / 100);
          if (this.page < pages) {
            this.status = 'works';
            return {name: 'page', params: { id: Number(this.page) + 1 } };
          } else {
            this.status = 'disabled';
            return {name: 'page', params: { id: Number(this.page) } };
          }
        }
        this.status = 'disabled';
        return {name: 'page', params: { id: Number(this.page) } };
      }
    }
  }
</script>
