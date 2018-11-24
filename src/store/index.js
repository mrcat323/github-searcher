import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

const store = new Vuex.Store({
  state: {
    repositories: [],
    args: {}
  },
  getters: {
    repositories(state) {
      let repos = state.repositories
      return repos.map(repo => {
        repo.title = repo.full_name
        repo.about = repo.description
        repo.url = repo.html_url
        repo.lang = repo.language
        return repo
      })
    },
    args(state) {
      let args = state.args
      return args
    }
  },
  mutations: {
    set(state, { type, items }) {
      state[type] = items
    }
  },
  actions: {
    search ({ commit }, args) {
      var url = 'https://api.github.com/search/repositories?q=' + args.query + '&page=' + args.page + '&per_page=100'

      Vue.http.get(url).then(function (response) {
        var list = response.body.items,
            total_count = response.body.total_count
        args.count = total_count
        commit('set', {type: 'repositories', items: list})
        commit('set', {type: 'args', items: args})
      }, function (error) {
        console.log(error)
      })
    }
  }
})

export default store
