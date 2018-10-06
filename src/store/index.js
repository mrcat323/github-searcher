import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    repositories: []
  },
  getters: {
    repositories(state) {
      let repos = state.repositories;
      return repos.map(repo => {
        repo.title = repo.full_name;
        repo.about = repo.description;
        repo.url = repo.html_url;
        repo.lang = repo.language;
        return repo;
      });
    }
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items;
    }
  },
  actions: {
    search ({ commit }, query) {
      const url = 'https://api.github.com/search/repositories?q=' + query + '&page=1&per_page=100';

      Vue.http.get(url).then(function (response) {
        const list = response.body.items,
              total_count = response.body.total_count;
        // console.log(list);
        commit('set', {type: 'repositories', items: list});
      }, function (error) {
        console.log(error);
      });
    }
  }
});

export default store
