<template>
  <h2 class="subtitle"><i :class="'bi ' + icon" />&nbsp;{{ text }}</h2>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "SubtitleComponent",
  props: {
    icon: String,
    text: String,
  },
});
</script>

<style lang="scss">
.subtitle {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  margin: 20px;
  color: #333333;
  font-size: 32px;
  font-family: "Open Sans", serif;
  letter-spacing: 0.05em;
  font-weight: normal;
}
@media screen and (max-width: 768px) {
  .subtitle {
    font-size: 24px;
    margin: 10px;
  }
}
</style>
