// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import vueResource from "vue-resource";
import vueRouter from "vue-router";
import App from "./App";

import Users from "./components/Users";
import Test from "./components/Test";
import HelloWorld from "./components/HelloWorld";

Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
  mode: "history",
  base: "__dirname",
  routes: [
    { path: "/", component: Users },
    { path: "/test", component: Test },
    { path: "/helloWorld", component: HelloWorld }
  ]
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app"> 
    <ul>
      <li><router-link to="/">Users</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
      <li><router-link to="/helloworld">Hello World</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
`
}).$mount("#app");
