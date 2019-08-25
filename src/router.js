import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import PlaydatesShow from './views/PlaydatesShow.vue';
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import SeeFriends from "./views/SeeFriends.vue";
import NotFriends from "./views/NotFriends.vue";
import FriendsNew from "./views/FriendsNew.vue";



Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/playdates/:id',
      name: 'playdates_show',
      component: PlaydatesShow
    },
    {
      path: '/seefriends',
      name: 'see-friends',
      component: SeeFriends
    },
    {
      path: '/notfriends',
      name: 'not-friends',
      component: NotFriends
    },
    {
      path: '/friendships/new',
      name: 'friends-new',
      component: FriendsNew
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { 
      path: "/signup", 
      name: "signup", 
      component: Signup 
    },
    { 
      path: "/login", 
      name: "login", 
      component: Login
    },
    { 
      path: "/logout", 
      name: "logout", 
      component: Logout
    }
  ]
});
