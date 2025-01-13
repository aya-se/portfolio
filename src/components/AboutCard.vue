<template>
  <div class="about-card">
    <div class="about-title">
      <div class="about-icon">
        <i :class="'bi bi-' + icon" :style="{ color: color }" />
      </div>
      {{ title }}
    </div>
    <p class="about-text">{{ text }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutCardComponent",
  props: {
    title: String,
    text: String,
    icon: String,
    color: String,
  },
});
</script>

<style lang="scss">
.about-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
  width: 100%;
  margin: 10px 20px;
  .about-title {
    display: flex;
    justify-content: left;
    align-items: center;
    width: 100%;
    color: #333333;
    font-size: 20px;
    font-weight: bold;
    .about-icon {
      display: flex;
      justify-content: left;
      font-size: 20px;
      width: 32px;
    }
  }
  .about-text {
    margin-left: 32px;
    text-align: left;
    white-space: pre-wrap;
    line-height: 200%;
    color: #333333;
  }
}

@media screen and (max-width: 768px) {
  .about-card {
    margin: 10px 10px;
    .about-title {
      font-size: 18px;
      .about-icon {
        font-size: 18px;
        width: 28px;
      }
    }
    .about-text {
      margin: 10px 0px;
    }
  }
}
</style>
