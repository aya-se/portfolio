import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import smoothScroll from "vue2-smooth-scroll";

Vue.config.productionTip = false;
Vue.use(smoothScroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
