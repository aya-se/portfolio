<template>
  <div id="app">
    <CustomHeader />
    <main><Home /></main>
    <CustomFooter />
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import CustomHeader from "./components/Header.vue";
import CustomFooter from "./components/Footer.vue";
export default {
  name: "app",
  components: { Home, CustomHeader, CustomFooter },
  methods: {},
};
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: #f0f0f5;
}
#app {
  font-family: "Noto Sans JP", serif;
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333333;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}
main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  background-color: #ffffff;
  padding-top: 70px;
  max-width: 1152px;
}
</style>
