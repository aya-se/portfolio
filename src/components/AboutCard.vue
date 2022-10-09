<template>
  <el-card class="about-card">
    <h3>
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
.card-text {
  font-size: 14px;
  color: #4f4f4f;
}
@media screen and (max-width: 480px) {
  .about-card {
    display: inline-block;
    width: 90%;
    height: auto;
    margin: 10px;
  }
}
@media screen and (min-width: 480px) {
  .about-card {
    display: inline-block;
    width: 400px;
    height: auto;
    margin: 10px;
  }
}
</style>
