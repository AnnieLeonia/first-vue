<template>
  <div id="app">
    <Users />
  </div>
</template>

<script>
import Test from "./components/Test";
import Users from "./components/Users";

export default {
  name: "App",
  components: {
    Test,
    Users
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
</style>
