<template>
  <div id="work">
    <div id="works">
      <h2 class="subtitle"><i class="bi bi-archive-fill" />&nbsp;作品</h2>
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

<script>
import { defineComponent } from "vue";
import AboutCard from "/src/components/AboutCard.vue";
import Timeline from "/src/components/Timeline.vue";
import WorkCard from "/src/components/WorkCard.vue";
import abouts from "/src/data/abouts.json";
import educations from "/src/data/educations.json";
import histories from "/src/data/histories.json";
import experiences from "/src/data/experiences.json";
import works from "/src/data/works.json";
export default defineComponent({
  name: "WorkView",
  data() {
    return {
      abouts: abouts,
      educations: educations,
      experiences: experiences,
      histories: histories,
      works: works,
    };
  },
  components: {
    AboutCard,
    Timeline,
    WorkCard,
  },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    },
  },
});
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
</style>
