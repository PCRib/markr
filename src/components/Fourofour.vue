<template>
  <transition name="component-fade" mode="out-in">
    <div>
      <a class="backBtn" @click="$router.go(-1)">Back</a>
      <p>{{msg}}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Fourofour",
  data() {
    return {
      msg: "Page Not Found"
    };
  }
};
</script>

<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
a {
  font-weight: 600;
}
</style>
