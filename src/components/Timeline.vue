<template>
  <el-timeline>
    <el-timeline-item
      class="timeline"
      v-for="(item, index) in list"
      :key="index"
      :timestamp="item.timestamp"
      placement="top"
    >
      <div class="timeline-card">
        <img class="timeline-image" :src="require(`@/assets/${item.image}`)" />
        <div class="timeline-content">
          <div class="timeline-title">
            {{ item.title }}
          </div>
          <div class="timeline-text">
            {{ item.text }}
          </div>
        </div>
      </div>
    </el-timeline-item>
  </el-timeline>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "TimelineComponent",
  props: {
    list: Array,
  },
});
</script>

<style lang="scss">
.timeline-card {
  display: flex;
  justify-content: left;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  .timeline-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  .timeline-content {
    max-width: 860px;
    margin: 0 0 0 40px;
    .timeline-title {
      text-align: left;
      font-size: 18px;
      font-weight: bold;
      line-height: 175%;
    }
    .timeline-text {
      text-align: left;
      font-size: 14px;
      color: #4f4f4f;
      line-height: 175%;
      white-space: pre-wrap;
    }
  }
}

.el-timeline-item__timestamp {
  text-align: left !important;
}

@media screen and (max-width: 640px) {
  .el-timeline {
    padding: 0 !important;
  }
  .timeline-card {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    width: 100%;
    max-width: 1000px;
    .timeline-image {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
    .timeline-content {
      width: 100%;
      margin: 0;
      .timeline-title {
        font-size: 16px;
      }
    }
  }
}
</style>
