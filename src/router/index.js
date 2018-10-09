import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App'
import Home from '../components/Home'
import Page from '../components/Page'

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/page/:id', name: 'page', component: Page }

  ]
});

export default router
