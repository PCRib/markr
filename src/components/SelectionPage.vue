<template>
  <div>
    <md-app md-waterfall md-mode="fixed">
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{title}}</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <router-link to="/selection/students">
            <md-list-item>
              <md-icon>move_to_inbox</md-icon>
              <span class="md-list-item-text">Students</span>
            </md-list-item>
          </router-link>
          <router-link to="/selection/units">
            <md-list-item>
              <md-icon>insert_drive_file</md-icon>
              <span class="md-list-item-text">Units</span>
            </md-list-item>
          </router-link>
          <router-link to="/selection/marks">
            <md-list-item>
              <md-icon>equalizer</md-icon>
              <span class="md-list-item-text">Marks</span>
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SelectionPage",
  computed: mapGetters(["getStudents"]),
  data() {
    return {
      title: "Spring Cohort 2019"
    };
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
