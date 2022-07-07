<template>
  <el-card class="work-card">
    <el-tag
      effect="plain"
      class="tag"
      v-for="(item, index) in tags"
      :key="index"
      :type="item.type"
      >{{ item.name }}</el-tag
    >
    <h3>{{ title }}</h3>
    <p class="work-text">
      {{ text }}
    </p>
    <p>
      <img class="work-image" :src="require(`@/assets/${image}`)" />
    </p>
    <el-button
      v-for="(item, index) in buttons"
      :key="index"
      :type="
        item.name.includes('Website')
          ? 'primary'
          : item.name.includes('Blog')
          ? 'success'
          : item.name.includes('Demo')
          ? 'danger'
          : 'info'
      "
      :disabled="item.link === ''"
      class="work-button"
      @click="onClick(item.link)"
      >{{ item.name }}</el-button
    >
  </el-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SkillCardComponent",
  props: {
    title: String,
    text: String,
    tags: Array,
    buttons: Array,
    image: String,
    onClick: Function
  }
});
</script>

<style>
@media screen and (max-width: 480px) {
  .work-card {
    display: inline-block;
    width: 90%;
    height: auto;
    margin: 10px;
  }
}

@media screen and (min-width: 480px) {
  .work-card {
    display: inline-block;
    width: 400px;
    height: auto;
    margin: 10px;
  }
}

.work-text {
  white-space: pre-wrap;
}

.work-image {
  height: 160px;
  max-width: 90%;
}

.work-button {
  margin-bottom: 5px !important;
}
</style>
