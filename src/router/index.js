import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import AllQuotes from '@/components/AllQuotes';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/allquotes',
      name: 'AllQuotes',
      component: AllQuotes,
    },
  ],
});
