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
        <li><router-link :to="{ name: 'page', params: { id: Number(page)-1 } } ">Previous</router-link></li>
        <li><router-link :to="{ name: 'page', params: { id: Number(page)+1 } } ">Next</router-link></li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    computed: {
      page() {
        return this.$route.params.id;
      },
      repositories() {
        return this.$store.getters.repositories;
      }
    }
  }
</script>
