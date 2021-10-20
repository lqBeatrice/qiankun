import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import startQiankun from "./micro";

createApp(App).use(store).use(router).mount("#app");

startQiankun();
