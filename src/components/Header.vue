<template>
  <nav class="navbar">
    <router-link to="/">
      <img src="../assets/markr.png">
    </router-link>
    <div class="box">
      <div class="container-4">
        <input type="search" id="search" placeholder="Search...">
        <button class="icon">
          <i class="fa fa-search"></i>
        </button>
      </div>
    </div>
    <div class="links">
      <ul>
        <router-link to="/selection">Students</router-link>
        <router-link to="/selection/units">Units</router-link>
        <router-link to="/selection/marks">Marking</router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
$primary-color: rgb(18, 46, 80);
$lighter-primary-color: rgb(35, 88, 152);
$secondary-color: rgb(215, 215, 215);

img {
  height: 5rem;
}

ul {
  margin: 0;
}

.navbar {
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
  padding: 0 2rem 0 0;
  margin-bottom: 1rem;
}

.links {
  min-width: 15rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    text-decoration: none;
    color: rgb(18, 46, 80);
    font-weight: bold;
    &:hover {
      transition: all 0.55s ease;
      color: rgb(181, 181, 181);
    }
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
  }
}

/* Experimental Styles for the Search/Button */
.container-4 {
  overflow: hidden;
  width: 300px;
  vertical-align: middle;
  white-space: nowrap;
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
}
.container-4 input#search {
  width: 300px;
  height: 50px;
  background: #f7f7f7;
  border: none;
  font-size: 10pt;
  float: left;
  color: rgb(18, 46, 80);
  padding-left: 15px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 1.75px solid transparent;
  &:hover {
    border: $primary-color 1.75px solid;
    transition: all 0.55s ease;
  }
  &:active,
  &:focus {
    border: $primary-color 1.75px solid;
    transition: $lighter-primary-color all 0.55s ease;
  }
}
.container-4 input#search::-webkit-input-placeholder {
  color: $primary-color;
}

.container-4 input#search:-moz-placeholder {
  /* Firefox 18- */
  color: $primary-color;
}

.container-4 input#search::-moz-placeholder {
  /* Firefox 19+ */
  color: $primary-color;
}

.container-4 input#search:-ms-input-placeholder {
  color: $primary-color;
}
.container-4 button.icon {
  -webkit-border-top-right-radius: 5px;
  -webkit-border-bottom-right-radius: 5px;
  -moz-border-radius-topright: 5px;
  -moz-border-radius-bottomright: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  /* border-radius: 5px; */
  border: none;
  background: rgb(18, 46, 80);
  height: 50px;
  width: 50px;
  color: #ffffff;
  opacity: 0;
  font-size: 10pt;

  -webkit-transition: all 0.55s ease;
  -moz-transition: all 0.55s ease;
  -ms-transition: all 0.55s ease;
  -o-transition: all 0.55s ease;
  transition: all 0.55s ease;
}
.container-4:hover button.icon,
.container-4:active button.icon,
.container-4:focus button.icon {
  outline: rgb(18, 46, 80);
  opacity: 1;
  margin-left: -50px;
}

.container-4:hover button.icon:hover {
  background: rgb(215, 215, 215);
  color: rgb(18, 46, 80);
}
/* ----------------------------------------- */
</style>

