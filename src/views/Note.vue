<template>
  <Container>
    <Wrapper>
      <Subtitle icon="bi-stack" text="記事" />
      <div class="top-border"></div>
      <template v-for="note in notes" :key="note.id">
        <a
          v-if="note.url"
          class="post-card"
          :href="note.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p class="post-date">{{ note.date }}</p>
          <h3 class="post-title">
            {{ note.title }}&nbsp;&nbsp;<i class="bi bi-box-arrow-up-right" />
          </h3>
          <p class="post-description">{{ note.description }}</p>
          <div class="post-tags">
            <span
              class="post-tag"
              :style="{
                color: '#fff',
                backgroundColor: getCategoryColor(note.category),
              }"
              >{{ note.category }}</span
            >
            <span v-for="tag in note.tags" :key="tag" class="post-tag">
              {{ tag }}
            </span>
          </div>
        </a>
        <router-link v-else class="post-card" :to="`/posts/${note.id}`">
          <p class="post-date">{{ note.date }}</p>
          <h3 class="post-title">
            {{ note.title }}
          </h3>
          <p class="post-description">{{ note.description }}</p>
          <div class="post-tags">
            <span
              class="post-tag"
              :style="{
                color: '#fff',
                backgroundColor: getCategoryColor(note.category),
              }"
              >{{ note.category }}</span
            >
            <span v-for="tag in note.tags" :key="tag" class="post-tag">
              {{ tag }}
            </span>
          </div>
        </router-link>
      </template>
    </Wrapper>
  </Container>
</template>

<script setup>
import Container from "/src/components/Container.vue";
import Wrapper from "/src/components/Wrapper.vue";
import Subtitle from "/src/components/Subtitle.vue";
import notes from "/src/data/notes.json";

const getCategoryColor = (category) => {
  switch (category) {
    case "技術ブログ":
      return "#ed7100";
    case "ニュース":
      return "#2aa88d";
    case "論文":
      return "#e7157b";
    case "対外発表":
      return "#8c4fff";
    case "日記":
      return "#7aa117";
    default:
      return "#6c757d";
  }
};
</script>
<style lang="scss">
.top-border {
  width: 100%;
  height: 1px;
  background-color: #ddd;
}
.post-card {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
  text-decoration: none !important;
  color: #333;
  &:hover > .post-title {
    color: #ed7100;
    text-decoration: underline;
    transition: 0.1s ease;
  }
  .post-category {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #ed7100;
  }
  .post-title {
    width: 100%;
    margin: 10px 0;
  }
  .post-date {
    color: #666;
    width: 100%;
    margin: 10px 0 5px;
  }
  .post-tags {
    width: 100%;
    margin: 10px 0;
    .post-tag {
      font-size: 14px;
      display: inline-block;
      margin: 0 10px 5px 0;
      padding: 2px 10px;
      background-color: #ededed;
      border-radius: 5px;
    }
  }
}
@media screen and (max-width: 768px) {
  .post-description {
    margin: 10px 0;
  }
  .post-tags {
    .post-tag {
      font-size: 12px;
    }
  }
}
</style>
