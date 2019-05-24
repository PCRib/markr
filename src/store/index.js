import Vuex from "vuex";
import Vue from "vue";
import students from "./modules/students";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    students
  }
});
