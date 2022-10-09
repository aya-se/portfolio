<template>
  <el-card class="about-card">
    <h3 class="card-title">
      <span> <i :class="'el-icon-' + icon" /> {{ title }} </span>
    </h3>
    <p class="card-text">{{ text }}</p>
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
.card-title {
  color: #333333;
}
.card-text {
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

.el-card__body {
  padding: 10px !important;
}

@media screen and (max-width: 480px) {
  .about-card {
    width: 100%;
    margin: 5px 0;
  }
  .el-card__body {
    padding: 5px 10px !important;
  }
  .card-title {
    font-size: 16px;
  }
}
</style>
