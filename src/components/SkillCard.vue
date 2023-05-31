<template>
  <el-card class="skill-card">
    <el-rate
      :model-value="level"
      disabled
      :max="3"
      :colors="['hotpink', 'hotpink', 'red']"
    />
    <h3 class="skill-title">
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
.skill-title {
  color: #333333;
}

.skill-text {
  font-size: 14px;
  height: 72px;
  color: #4f4f4f;
  line-height: 175%;
}

.skill-card {
  display: inline-block;
  width: 260px;
  height: auto;
  margin: 10px;
  box-shadow: none !important;
  border-radius: 0 !important;
}

.skill-card .el-card__body {
  padding: 20px 15px !important;
}

.skill-image {
  height: 100px;
}

@media screen and (max-width: 480px) {
  .skill-card {
    width: 100%;
    margin: 5px 0;
  }
  .skill-card .el-card__body {
    padding: 10px !important;
  }
  .skill-title {
    font-size: 16px;
  }
  .skill-text {
    height: auto;
  }
}
</style>
