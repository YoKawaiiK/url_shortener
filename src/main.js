import "@/assets/scss/main.scss";

import { FontAwesomeIcon } from "@/plugins/index";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
