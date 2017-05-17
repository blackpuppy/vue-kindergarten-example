import Vue from 'vue';
import Router from 'vue-router';
import { createSandbox } from 'vue-kindergarten';

import Hello from '@/components/Hello';
import Bye from '@/components/Bye';
import Secret from '@/components/Secret';
import * as perimeters from '../perimeters';
import RouteGoverness from '../governesses/RouteGoverness';
import child from '../child';
import store from '../store';

Vue.use(Router);

const router = new Router({
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

router.beforeEach((to, from, next) => {
  const perimeter = perimeters[`${to.name}Perimeter`];

  if (perimeter) {
    const sandbox = createSandbox(child(store), {
      perimeters: [
        perimeter,
      ],

      governess: new RouteGoverness({ from, to, next }),
    });

    // if (!sandbox.isAllowed('route')) {
    //   return next('/');
    // }
    return sandbox.guard('route');
  }

  return next();
});

export default router;
