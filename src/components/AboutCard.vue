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

@media screen and (max-width: 480px) {
  .about-card {
    width: 100%;
    margin: 5px 0;
  }
  .about-title {
    font-size: 16px;
  }
}
</style>
