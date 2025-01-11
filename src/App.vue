<template>
  <div id="app">
    <CustomHeader />
    <main><router-view /></main>
    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from "./components/Header.vue";
import CustomFooter from "./components/Footer.vue";
export default {
  name: "app",
  components: { CustomHeader, CustomFooter },
  methods: {},
};
</script>

<style lang="scss">
body {
  margin: 0px;
  background-color: #f0f0f5;
}
#app {
  width: 100%;
  min-height: 100vh;
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
  width: 100%;
  max-width: 1152px;
  min-height: calc(100vh - 140px);
}
</style>
