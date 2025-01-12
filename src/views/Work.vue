<template>
  <div id="work">
    <div id="works">
      <Subtitle icon="bi-archive-fill" text="作品" />
      <WorkCard
        v-for="(item, index) in works"
        :key="index"
        :title="item.title"
        :text="item.text"
        :tags="item.tags"
        :buttons="item.buttons"
        :image="item.image"
        :onClick="onClick"
      />
    </div>
  </div>
</template>

<script setup>
import WorkCard from "/src/components/WorkCard.vue";
import works from "/src/data/works.json";
import Subtitle from "/src/components/Subtitle.vue";

const onClick = (url) => {
  window.open(url, "_blank");
};
</script>
<style lang="scss">
#work {
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  margin: 0 20px;
}
#works {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 20px 30px;
}
</style>
