import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, percentFilter } from "@/filters";

//import de tailwind
Vue.config.productionTip = false;
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percentFilter);

//Instancia de Vue
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
