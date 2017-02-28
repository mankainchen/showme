// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import sellers from './components/sellers/sellers';
import './common/stylus/index.styl';

Vue.use(VueRouter);
Vue.use(VueResource);
/* eslint-disable no-new */
const routes = [{
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/sellers',
    component: sellers
  }];
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
});
new Vue({
  router,
  template: '<App>',
  components: {
    App
  }
}).$mount('#app');
router.push('goods');
