<template>
  <section>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about11">About</router-link> |
      <router-link to="/react">React</router-link> | 
      <router-link to="/app">React</router-link>
    </div>
    <router-view />
    <section id="frame" />
  </section>
</template>

<script lang="ts">
export default {
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
