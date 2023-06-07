<template>
  <div class="work-card">
    <el-tag
      effect="plain"
      class="tag"
      size="large"
      v-for="(item, index) in tags"
      :key="index"
      :type="item.type"
      >{{ item.name }}</el-tag
    >
    <h3 class="work-title">{{ title }}</h3>
    <p class="work-text">
      {{ text }}
    </p>
    <p>
      <img class="work-image" :src="`/${image}`" />
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
      size="large"
      class="work-button"
      @click="onClick(item.link)"
      >{{ item.name }}</el-button
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "WorkCardComponent",
  props: {
    title: String,
    text: String,
    tags: Array,
    buttons: Array,
    image: String,
    onClick: Function,
  },
});
</script>

<style lang="scss">
.work-card {
  padding: 20px;
  border: 1px solid #ddd;
  width: 320px;
  height: auto;
  margin: 10px;
  .el-tag {
    font-size: 11px !important;
    padding: 0 10px !important;
    margin: 5px 5px 0 !important;
  }
  .el-button {
    margin: 5px 5px !important;
    padding: 0 15px !important;
    border-radius: 0 !important;
  }
  .work-image {
    height: 160px;
    max-width: 90%;
  }
  .work-button {
    margin-bottom: 5px !important;
  }
  .work-title {
    font-size: 18px;
    color: #333333;
  }
  .work-text {
    font-size: 14px;
    color: #333333;
    line-height: 175%;
  }
}

@media screen and (max-width: 480px) {
  .work-card {
    width: 100%;
    max-width: 360px;
    height: auto;
    margin: 10px 0;
    .work-title {
      font-size: 16px;
    }
  }
  .el-card__body {
    padding: 10px !important;
  }
}
</style>
