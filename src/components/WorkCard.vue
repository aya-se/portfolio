<template>
  <div class="work-card">
    <div class="work-tags">
      <div
        v-for="(item, index) in tags"
        :key="index"
        class="work-tag"
        :style="{
          color:
            item.type === 'success'
              ? '#67c23a'
              : item.type === 'primary'
              ? '#409eff'
              : item.type === 'warning'
              ? '#e6a23c'
              : item.type === 'danger'
              ? '#f56c6c'
              : '#909399',
          border: `1px solid ${
            item.type === 'success'
              ? '#67c23a'
              : item.type === 'primary'
              ? '#409eff'
              : item.type === 'warning'
              ? '#e6a23c'
              : item.type === 'danger'
              ? '#f56c6c'
              : '#909399'
          }`,
        }"
      >
        {{ item.name }}
      </div>
    </div>
    <h3 class="work-title">{{ title }}</h3>
    <p class="work-text">
      {{ text }}
    </p>
    <p class="work-image-wrapper">
      <img :src="`/${image}`" alt="work" class="work-image" />
    </p>
    <div class="work-buttons">
      <button
        v-for="(item, index) in buttons"
        :key="index"
        :style="{
          backgroundColor: item.name.includes('Website')
            ? '#409eff'
            : item.name.includes('Blog')
            ? '#67c23a'
            : item.name.includes('Demo')
            ? '#fff'
            : '#909399',
        }"
        class="work-button"
        @click="onClick(item.link)"
      >
        {{ item.name }}
      </button>
    </div>
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
  display: grid;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  width: 320px;
  height: auto;
  margin: 10px;
  .work-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    .work-tag {
      font-size: 11px;
      padding: 6px 10px;
      border-radius: 5px;
      margin: 5px;
    }
  }
  .work-title {
    font-size: 18px;
    color: #333333;
    width: 100%;
    height: auto;
  }
  .work-text {
    font-size: 14px;
    color: #333333;
    line-height: 175%;
    width: 100%;
  }
  .work-image-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    margin: 0 0 20px 0;
    .work-image {
      display: flex;
      max-width: 100%;
      max-height: 150px;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  .work-buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    .work-button {
      color: #ffffff;
      outline: none;
      border: none;
      cursor: pointer;
      font-size: 14px;
      padding: 10px 15px;
      border-radius: 5px;
      margin: 0 5px 5px;
      height: 40px;
      &:hover {
        opacity: 0.8;
      }
    }
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
}
</style>
