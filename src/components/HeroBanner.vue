<template>
  <div class="hero">
    <div>
      <div class="hero-slogan">
        <h1>
          All Your
          <span>Marking</span> in One Place
        </h1>
        <p>Complete Dashboard on All Your Students, Creating a Better Experience</p>
      </div>
      <div>
        <router-link to="/selection">
          <md-button class="md-raised">Get Started</md-button>
        </router-link>
        <router-link to="/signup">
          <md-button class="md-raised scnd-btn">Sign Up</md-button>
        </router-link>
      </div>
    </div>
    <div class="iconContainer">
      <LaptopIcon/>
    </div>
  </div>
</template>

<script>
import LaptopIcon from "./LaptopIcon";
export default {
  name: "HeroBanner",
  components: {
    LaptopIcon
  }
};
</script>

<style lang="scss" scoped>
$tertiary-color: #ffffff;
.hero {
  height: 70vh;
  background-color: rgb(18, 46, 80);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
  .hero-slogan {
    word-wrap: break-word;
    width: 25rem;
    span {
      color: #42b983;
    }
  }
  h1 {
    color: $tertiary-color;
    font-weight: 900;
  }
  p {
    color: $tertiary-color;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .iconContainer {
    width: 40rem;
    /* position: absolute;
    right: 10rem; */
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
.md-button {
  background-color: #42b983;
  color: #ffffff;
}

.scnd-btn {
  background-color: transparent;
  border: #42b983 2px solid;
  color: #ffffff;
}
</style>
