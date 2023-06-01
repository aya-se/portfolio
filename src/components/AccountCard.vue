<template>
  <el-card class="account-card">
    <el-link target="_blank" :href="link">
      <h3>{{ title }}</h3>
    </el-link>
    <p>
      <img class="account-image" :src="require(`@/assets/${image}`)" />
    </p>
  </el-card>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "AccountCardComponent",
  props: {
    title: String,
    link: String,
    image: String,
  },
});
</script>

<style lang="scss">
.account-card {
  display: inline-block;
  width: 260px;
  height: auto;
  margin: 10px;
}
.account-image {
  height: 160px;
}
</style>
