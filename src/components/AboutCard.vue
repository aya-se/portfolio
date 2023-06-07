<template>
  <div class="about-card">
    <h3 class="about-title">
      <span> <i :class="'bi bi-' + icon" />&nbsp;{{ title }} </span>
    </h3>
    <p class="about-text">{{ text }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutCardComponent",
  props: {
    title: String,
    text: String,
    icon: String,
  },
});
</script>

<style lang="scss">
.about-title {
  color: #333333;
}
.about-text {
  font-size: 14px;
  color: #333333;
}
.about-card {
  padding: 5px 10px 10px;
  border: 1px solid #ddd;
  display: inline-block;
  width: 400px;
  height: auto;
  margin: 10px;
  .el-card__body {
    padding: 10px !important;
  }
}

@media screen and (max-width: 480px) {
  .about-card {
    width: 100%;
    margin: 5px 0;
  }
  .about-title {
    font-size: 16px;
  }
}
</style>
