<template>
  <div>
    <h1>{{this.units.title}}</h1>
    <CheckBox/>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";
import unitOne from "../data.js";
import CheckBox from "./CheckBox";
export default {
  name: "Units",
  components: {
    CheckBox
  },
  // computed: mapGetters(["getStudents"]),
  data() {
    return {
      title: "Spring Cohort 2019",
      units: unitOne
    };
  },
  created() {
    console.log(this.units);
  }
};
</script>

<style lang="scss" scoped>
.md-app {
  max-height: 400px;
  border: 1px solid rgba(#000, 0.12);
  z-index: 0;
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
.md-elevation-4 {
  background: #42b983;
}
.md-title {
  color: #ffffff;
}
.md-list {
  a {
    margin: 0;
    justify-content: flex-start;
    color: rgb(18, 46, 80);
    &:hover {
      background: rgb(242, 242, 242);
      transition: all 0.55s ease;
      i {
        color: #42b983;
      }
      span {
        color: #42b983;
      }
    }
  }
}
a {
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
</style>
