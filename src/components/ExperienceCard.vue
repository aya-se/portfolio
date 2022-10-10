<template>
  <div class="experience-card">
    <img class="experience-image" :src="require(`@/assets/${image}`)" />
    <div class="experience-content">
      <div class="experience-title">
        {{ title }}
      </div>
      <div class="experience-text">
        {{ text }}
      </div>
    </div>
  </div>
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
    onClick: Function,
  },
});
</script>

<style>
.experience-card {
  display: flex;
  justify-content: left;
  width: 100%;
  max-width: 1000px;
  margin: auto;
}

#experience .el-timeline-item__timestamp {
  text-align: left !important;
}
.experience-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.experience-content {
  max-width: 860px;
  margin: 0 0 0 40px;
}
.experience-title {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  line-height: 175%;
}
.experience-text {
  text-align: left;
  font-size: 14px;
  color: #4f4f4f;
  line-height: 175%;
}
@media screen and (max-width: 640px) {
  #experience .el-timeline {
    margin: 0 !important;
    padding: 0 !important;
  }
}
</style>
