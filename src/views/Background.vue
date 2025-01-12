<template>
  <div id="background">
    <div id="education">
      <h2 class="subtitle"><i class="bi bi-mortarboard-fill" />&nbsp;経歴</h2>
      <Timeline :list="educations" />
    </div>
    <div id="publication">
      <Subtitle icon="bi-file-text-fill" text="論文・発表" />
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
      <Subtitle icon="bi-bar-chart-fill" text="インターン・アルバイト" />
      <Timeline :list="experiences" />
    </div>
    <div id="history">
      <Subtitle icon="bi-clock-fill" text="その他" />
      <Timeline :list="histories" />
    </div>
  </div>
</template>

<script setup>
import Timeline from "/src/components/Timeline.vue";
import PublicationCard from "../components/PublicationCard.vue";
import Subtitle from "/src/components/Subtitle.vue";
import educations from "/src/data/educations.json";
import publications from "/src/data/publications.json";
import experiences from "/src/data/experiences.json";
import histories from "/src/data/histories.json";
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
</style>
