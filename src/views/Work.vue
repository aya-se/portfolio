<template>
  <Container>
    <Wrapper>
      <Subtitle icon="bi-archive-fill" text="作品" />
      <div class="work-cards">
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
    </Wrapper>
  </Container>
</template>

<script setup>
import Container from "../components/Container.vue";
import Wrapper from "../components/Wrapper.vue";
import WorkCard from "/src/components/WorkCard.vue";
import works from "/src/data/works.json";
import Subtitle from "/src/components/Subtitle.vue";

const onClick = (url) => {
  window.open(url, "_blank");
};
</script>
<style lang="scss">
.work-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
