<template>
  <a class="backBtn" @click="$router.go(-1)">Back</a>
</template>

<script>
export default {
  name: "SendBack"
};
</script>

<style>
a {
  font-weight: 600;
}
</style>
