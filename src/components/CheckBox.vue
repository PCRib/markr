<template>
  <div>
    <div class="requirementBox">
      <h1>Main Requirements</h1>
      <md-checkbox
        v-model="checked"
        :key="index"
        v-for="(task, index) in unitOne.sprintRequirements"
        :value="index"
      >{{task}}</md-checkbox>
    </div>
    <div lass="requirementBox">
      <h1>Basic Requirements</h1>
      <md-checkbox :key="index" v-for="(task, index) in unitOne.basicRequirements">{{task}}</md-checkbox>
    </div>
    <p>{{checked}}</p>
  </div>
</template>

<script>
import unitOne from "../data.js";
export default {
  name: "CheckBox",
  //   props: ["task"],
  //   computed: {
  //     listJson: function() {
  //       return JSON.parse(this.task);
  //     }
  // },
  data() {
    return {
      //   listToTouch: JSON.parse(this.task)
      unitOne: unitOne,
      checked: []
    };
  }
};
</script>

<style lang="scss" scoped>
.md-checkbox {
  display: flex;
}
</style>
