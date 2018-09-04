import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/login';
// import HelloWorld from '@/components/HelloWorld'
Vue.use(Router);
export default new Router({
  routes: [
    {name: 'l', path: '/', redirect: {name: 'login'}},
    {
      name: 'login', path: '/login', component: Login
    }
  ]
});
