import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Search from '../components/Search'
import Repositories from '../components/Repositories'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', components: App },

  ]
});

export default router
