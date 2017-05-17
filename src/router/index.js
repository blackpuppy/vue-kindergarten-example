import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Bye from '@/components/Bye';
import Secret from '@/components/Secret';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello,
    },
    {
      path: '/bye',
      name: 'bye',
      component: Bye,
    },
    {
      path: '/secret',
      name: 'secret',
      component: Secret,
    },
  ],
});
