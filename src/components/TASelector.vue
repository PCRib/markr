<template>
  <div>
    <router-link to="/selection/students/p">
      <md-button class="md-raised">Spicy P</md-button>
    </router-link>
    <router-link to="/selection/students/r">
      <md-button class="md-raised scnd-btn">Sinney</md-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TASelector"
};
</script>

<style lang="scss" scoped>
.md-button {
  &:hover {
    background-color: #42b983;
    color: #ffffff;
    transition: all 0.55s ease;
  }
}
</style>
