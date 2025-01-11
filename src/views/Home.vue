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
      <Timeline :list="educations" class="educations" />
    </div>
    <div id="top">
      <div class="sns-links-list">
        <ul class="sns-links">
          <li>
            <a
              href="https://twitter.com/ayase_lab"
              target="_blank"
              rel="noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://github.com/aya-se"
              target="_blank"
              rel="noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kakeru-hattori-973404240/"
              target="_blank"
              rel="noreferrer"
            ></a>
          </li>
        </ul>
      </div>
    </div>

    <div id="experience">
      <h2 class="subtitle">
        <i class="bi bi-bar-chart-fill" />&nbsp;EXPERIENCE
      </h2>
      <Timeline :list="experiences" />
    </div>

    <div id="history">
      <h2 class="subtitle"><i class="bi bi-clock-fill" />&nbsp;HISTORY</h2>
      <Timeline :list="histories" />
    </div>

    <div id="work">
      <h2 class="subtitle"><i class="bi bi-check-circle-fill" />&nbsp;WORKS</h2>
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

    <div id="contact">
      <h2 class="subtitle">
        <i class="bi bi-chat-square-dots-fill" />&nbsp;CONTACT
      </h2>
      <p><i class="bi bi-envelope-fill" />&nbsp;&nbsp;kakkeno1@gmail.com</p>
      <p><i class="bi bi-twitter" />&nbsp;&nbsp;@ayase_lab</p>
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
  name: "HomeView",
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
#home {
  overflow: hidden;
  padding: 0 20px;
  margin: 0 20px;
}
#top,
#experience,
#contact {
  padding: 10px 20px 30px;
}
#about,
#experience,
#history,
#work {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px 20px 30px;
}
.about-cards-container {
  display: flex;
  justify-content: center;
  width: 100%;
}
.about-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1400px;
}
.educations {
  width: 100%;
  max-width: 1028px;
  padding-top: 40px !important;
}
.tab {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  background-color: white;
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
.top-title {
  width: 100%;
  color: #333333;
  font-size: 36px;
  font-family: "Open Sans", serif;
  letter-spacing: 0.05em;
  font-weight: normal;
}
.top-text {
  width: 100%;
  color: #333333;
  margin: 20px 0;
  line-height: 175%;
}
.sns-links-list {
  margin: 20px 0;
  display: flex;
  flex-wrap: warp;
  justify-content: center;
}
.top-description-container {
  display: flex;
  justify-content: center;
}
.top-description {
  text-align: left;
  color: #333333;
  margin: 20px 20px;
  line-height: 175%;
  max-width: 1920px;
}
.top-icon {
  border-radius: 2rem;
  transition: 0.3s all ease;
  width: 200px;
  height: 200px;
}
.top-icon:hover {
  opacity: 0.7;
}
.tag {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}

@media screen and (max-width: 640px) {
  .top-title {
    font-size: 32px;
  }
  .subtitle {
    font-size: 28px;
  }
  .top-description {
    margin: 20px 0px;
    font-size: 14px;
    line-height: 175%;
  }
}

.sns-links {
  list-style: none;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
.sns-links li {
  float: left;
  margin: 0 8px;
  padding: 0;
}
.sns-links a {
  text-decoration: none;
}
.sns-links li a::before {
  border-style: solid;
  border-width: 1px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  color: #fff;
  display: inline-block;
  font-family: FontAwesome;
  font-size: 16px;
  height: 42px; /* Button height */
  line-height: 42px; /* Button height */
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
  text-align: center;
  width: 42px; /* Button width */
}
.sns-links li a[href*="github.com"]::before {
  border-color: #181717;
  background-color: #181717;
  content: "\f09b";
}
.sns-links li a[href*="linkedin.com"]::before {
  border-color: #0077b5;
  background-color: #0077b5;
  content: "\f0e1";
}
.sns-links li a[href*="twitter.com"]::before {
  border-color: #55acee;
  background-color: #55acee;
  content: "\f099";
}
.sns-links li a:hover::before {
  background-color: #fff;
}
.sns-links li a[href*="github.com"]:hover::before {
  color: #181717;
}
.sns-links li a[href*="linkedin.com"]:hover::before {
  color: #0077b5;
}
.sns-links li a[href*="twitter.com"]:hover::before {
  color: #55acee;
}
</style>
