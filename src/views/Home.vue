<template>
  <div id="home">
    <div id="about">
      <h2 class="subtitle">
        <i class="bi bi-info-circle-fill" />&nbsp;プロフィール
      </h2>
      <div class="about-cards-container">
        <div class="about-cards">
          <AboutCard
            v-for="(item, index) in abouts"
            :key="index"
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
            :color="item.color"
          />
        </div>
      </div>
    </div>
    <div id="contact">
      <h2 class="subtitle">
        <i class="bi bi-chat-square-dots-fill" />&nbsp;連絡先
      </h2>
      <p class="contact-item">
        <i class="bi bi-envelope-fill" />&nbsp;&nbsp;kakkeno1@gmail.com
      </p>
      <p class="contact-item">
        <i class="bi bi-twitter" />&nbsp;&nbsp;@ayase_lab
      </p>
      <p class="sns-links">
        <a
          href="https://x.com/ayase_lab"
          class="sns-link"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-twitter-x" style="color: #0f1419"
        /></a>
        <a
          href="https://github.com/aya-se"
          class="sns-link"
          target="_blank"
          rel="noreferrer"
          ><i class="bi bi-github" style="color: #181717"
        /></a>
        <a
          href="https://www.linkedin.com/in/kakeru-hattori-973404240/"
          class="sns-link"
          target="_blank"
          rel="noreferrer"
          ><i class="bi bi-linkedin" style="color: #0077b5"
        /></a>
      </p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AboutCard from "/src/components/AboutCard.vue";
import Timeline from "/src/components/Timeline.vue";
import abouts from "/src/data/abouts.json";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      abouts: abouts,
    };
  },
  components: {
    AboutCard,
    Timeline,
  },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    },
  },
});
</script>
<style lang="scss">
#home {
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  margin: 0 20px;
}
#about,
#contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 20px 30px;
}
.about-cards-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .about-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1400px;
  }
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
.sns-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin-left: 52px;
  .sns-link {
    text-decoration: none;
    margin: 0 10px;
    font-size: 32px;
  }
}
.contact-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  margin-left: 52px;
  color: #333333;
  font-size: 16px;
  letter-spacing: 0.05em;
  font-weight: normal;
}
</style>
