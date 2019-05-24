import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import {
  MdButton,
  MdApp,
  MdToolbar,
  MdDrawer,
  MdList,
  MdIcon,
  MdContent,
  MdTable,
  MdTabs,
  MdCheckbox
} from "vue-material/dist/components";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import router from "./router";

Vue.use(VueMaterial);
Vue.use(MdButton);
Vue.use(MdApp);
Vue.use(MdToolbar);
Vue.use(MdDrawer);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdContent);
Vue.use(MdTable);
Vue.use(MdTabs);
Vue.use(MdCheckbox);

new Vue({
  router,
  store,
  el: "#app",
  render: h => h(App)
});
