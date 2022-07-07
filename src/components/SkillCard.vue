<template>
  <el-card class="skill-card">
    <h3>
      {{ title }}
    </h3>
    <img class="skill-image" :src="require(`@/assets/${image}`)" />
  </el-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SkillCardComponent",
  props: {
    title: String,
    level: Number,
    text: String,
    image: String
  }
});
</script>

<style>
.skill-card {
  display: inline-block;
  width: 260px;
  height: auto;
  margin: 10px;
}
.skill-image {
  height: 160px;
}
</style>
