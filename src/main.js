import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from '@/router'
//import de tailwind
Vue.config.productionTip = false;
//Instancia de Vue
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
