<template>
  <div id="background">
    <div id="education">
      <h2 class="subtitle"><i class="bi bi-mortarboard-fill" />&nbsp;経歴</h2>
      <Timeline :list="educations" />
    </div>
    <div id="publication">
      <h2 class="subtitle">
        <i class="bi bi-file-text-fill"></i>&nbsp;論文・発表
      </h2>
      <ol>
        <li v-for="item in publications" :key="item.title">
          <PublicationCard
            :category="item.category"
            :authors="item.authors"
            :title="item.title"
            :howPublished="item.how_published"
            :publishDate="item.publish_date"
            :award="item.award"
            :url="item.url"
            :awardUrl="item.award_url"
          />
        </li>
      </ol>
    </div>
    <div id="experience">
      <h2 class="subtitle">
        <i class="bi bi-bar-chart-fill" />&nbsp;インターン・アルバイト
      </h2>
      <Timeline :list="experiences" />
    </div>
    <div id="history">
      <h2 class="subtitle"><i class="bi bi-clock-fill" />&nbsp;その他</h2>
      <Timeline :list="histories" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Timeline from "/src/components/Timeline.vue";
import PublicationCard from "../components/PublicationCard.vue";
import educations from "/src/data/educations.json";
import publications from "/src/data/publications.json";
import experiences from "/src/data/experiences.json";
import histories from "/src/data/histories.json";
export default defineComponent({
  name: "BackgroundView",
  data() {
    return {
      educations: educations,
      publications: publications,
      experiences: experiences,
      histories: histories,
    };
  },
  components: {
    Timeline,
    PublicationCard,
  },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    },
  },
});
</script>
<style lang="scss">
#background {
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  margin: 0 20px;
}
#education,
#publication,
#experience,
#history {
  padding: 10px 20px 30px;
}
.educations {
  width: 100%;
  max-width: 1028px;
  padding-top: 40px !important;
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
