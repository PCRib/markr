import Vue from "vue";
import Router from "vue-router";
import SelectionPage from "./components/SelectionPage";
import Units from "./components/Units";
import HeroBanner from "./components/HeroBanner";
import StudentTable from "./components/StudentTable";
import StudentPage from "./components/StudentPage";
import TASelector from "./components/TASelector";
import Fourofour from "./components/Fourofour";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "main", component: HeroBanner },
    {
      path: "/selection",
      name: "selectionPage",
      component: SelectionPage,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "",
          component: TASelector
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: "students/:id",
          component: StudentTable
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: "units",
          component: Units
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: "marks",
          component: Fourofour
        }
      ]
    },
    { path: "/students", name: "units", component: StudentTable },
    { path: "/student/:id", name: "units", component: StudentPage },
    { path: "*", name: "units", component: Fourofour }
  ]
});
