<template>
  <el-card class="skill-card">
    <el-rate
      :model-value="level"
      disabled
      :max="3"
      :colors="['hotpink', 'hotpink', 'red']"
    />
    <h3>
      {{ title }}
    </h3>
    <p class="skill-text">{{ text }}</p>
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
    image: String,
  },
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
  height: 100px;
}

.skill-text {
  color: #4f4f4f;
  font-size: 16px;
  height: 80px;
}
</style>
