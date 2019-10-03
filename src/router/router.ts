import Router from 'vue-router';

import ApiChallengeHome from '../components/ApiChallenge/ApiChallengeHome.vue';
import UIChallengeHome from '../components/UIChallenge/UIChallengeHome.vue';

const ApiChallengeRoute = '/ApiChallenge';
const UiChallengeRoute = '/UIChallenge';
const defaultURL = ApiChallengeRoute;

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: defaultURL,
    },
    {
      path: ApiChallengeRoute,
      component: ApiChallengeHome,
    },
    {
      path: UiChallengeRoute,
      component: UIChallengeHome,
    },
    {
      path: '*',
      redirect: defaultURL,
    },
  ],
});
