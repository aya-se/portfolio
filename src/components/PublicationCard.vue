<template>
  <div class="publication-card">
    <span class="publication-text">
      <span v-for="(author, index) in authors" :key="index">
        <span
          v-if="author === '服部 翔' || author === 'Kakeru Hattori'"
          class="author-highlight"
          >{{ author }}
        </span>
        <span v-else>{{ author }}</span>
        {{ index < authors.length - 1 ? ",&nbsp;" : "" }}
      </span>
      .&nbsp;<a :href="url" target="_blank">{{ title }}</a
      >.&nbsp; {{ publishDate }}.&nbsp; {{ howPublished }}.
      <span v-if="award"
        >&nbsp;🎉 <a :href="awardUrl" target="_blank">{{ award }}</a
        >.</span
      >
    </span>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PublicationCardComponent",
  props: {
    category: String,
    authors: Array,
    title: String,
    howPublished: String,
    publishDate: String,
    award: String,
    url: String,
    awardUrl: String,
  },
});
</script>

<style lang="scss">
.publication-card {
  width: 100%;
  margin-left: 24px;
  margin-bottom: 10px;
  text-align: left;
  .publication-text {
    line-height: 150%;
    a {
      color: #ed7100;
      font-weight: bold;
    }
    .author-highlight {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: 480px) {
  .publication-card {
    width: 100%;
    margin: 5px 0;
    a {
      text-decoration: none;
    }
  }
}
</style>
