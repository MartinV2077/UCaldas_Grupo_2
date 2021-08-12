import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
//Instancia de Vue
new Vue({
  render: (h) => h(App),
}).$mount("#app");
