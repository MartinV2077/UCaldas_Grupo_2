import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
//import de tailwind
Vue.config.productionTip = false;
//Instancia de Vue
new Vue({
  render: (h) => h(App),
}).$mount("#app");
