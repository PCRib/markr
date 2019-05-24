<template>
  <div>
    <SendBack></SendBack>
    <md-table>
      <md-table-toolbar>
        <h1 class="md-title">Students</h1>
      </md-table-toolbar>
      <md-table-row class="mainTbRow">
        <md-table-head md-numeric>ID</md-table-head>
        <md-table-head>Name</md-table-head>
        <md-table-head>Email</md-table-head>
        <md-table-head>Average</md-table-head>
        <md-table-head>Attendance</md-table-head>
      </md-table-row>

      <md-table-row class="tbRow" v-bind:key="index" v-for="(student,index) in filteredStudents">
        <md-table-cell md-numeric>{{index + 1}}</md-table-cell>
        <md-table-cell>
          <router-link :to="'/student/'+ student.name">{{student.name}}</router-link>
        </md-table-cell>
        <md-table-cell>{{student.email}}</md-table-cell>
        <md-table-cell>{{student.average}}</md-table-cell>
        <md-table-cell>{{student.attendance}}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SendBack from "./SendBack";

export default {
  name: "StudentTable",
  components: {
    SendBack
  },
  data() {
    return {
      filteredStudents: []
    };
  },
  computed: mapGetters(["getStudents"]),
  data() {
    return {
      title: "Spring Cohort 2019"
    };
  },
  created() {
    const newArr = [...this.getStudents].filter(s => {
      return s.assignTA == this.$route.params.id;
    });
    this.filteredStudents = newArr;
  }
};
</script>

<style lang="scss" scoped>
td {
  text-align: left;
}

.mainTbRow {
  color: #42b983;
  .md-table-head {
    border-bottom: 1px #f2f2f2 solid;
  }
}
.md-table-cell {
  border-bottom: 1px rgb(242, 242, 242) solid;
}
.tbRow {
  color: rgb(18, 46, 80);
  &:hover {
    background: rgb(242, 242, 242);
  }
}
</style>
