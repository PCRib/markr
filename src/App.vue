<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  name: "app",
  data() {
    return {
      msg: "Are Vue Ready to Markr?"
    };
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 85px;
}

body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
h1,
h2 {
  font-weight: normal;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  cursor: pointer;
}
</style>
