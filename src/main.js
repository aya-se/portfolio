import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import smoothScroll from "vue3-smooth-scroll";
import installElementPlus from "./plugins/element";

const app = createApp(App);
installElementPlus(app);
app.use(smoothScroll);
app.use(router);

app.mount("#app");
