// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueKindergarten from 'vue-kindergarten';
import App from './App';
import router from './router';
import store from './store';
import child from './child';

Vue.config.productionTip = false;

Vue.use(VueKindergarten, {
  child,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
