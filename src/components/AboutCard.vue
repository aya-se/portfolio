<template>
  <el-card class="about-card">
    <h3 class="about-title">
      <span> <i :class="'el-icon-' + icon" /> {{ title }} </span>
    </h3>
    <p class="about-text">{{ text }}</p>
  </el-card>
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

<style>
.about-title {
  color: #333333;
}
.about-text {
  font-size: 14px;
  color: #4f4f4f;
}
.about-card {
  display: inline-block;
  width: 400px;
  height: auto;
  margin: 10px;
  box-shadow: none !important;
  border-radius: 0 !important;
}

.about-card .el-card__body {
  padding: 10px !important;
}

@media screen and (max-width: 480px) {
  .about-card {
    width: 100%;
    margin: 5px 0;
  }
  .about-card .el-card__body {
    padding: 5px 10px !important;
  }
  .about-title {
    font-size: 16px;
  }
}
</style>
