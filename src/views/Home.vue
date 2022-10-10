<template>
  <div id="home">
    <CustomHeader />
    <div id="top">
      <h1 class="top-title">KAKERU HATTORI</h1>
      <div class="top-text">
        東京工業大学<br />情報理工学院 情報工学系 学部4年<br />岡崎研究室
      </div>
      <img class="top-icon" src="../assets/icon.png" />
      <div class="sns-links-list">
        <ul class="sns-links">
          <li>
            <a
              href="https://twitter.com/Hakuba_snow"
              target="_blank"
              rel="noreferrer"
            ></a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCW4FH8oKhHE8vIRnr0StJ8g"
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
      <p class="top-description">
        東京工業大学&nbsp;岡崎研究室所属の服部と申します。
        <br />
        現在は、自然言語処理のさまざまな分野のうち、議事録をはじめとした長い文書の要約をテーマに研究を行っています。ただ要約するだけではなく、読者が真に理解しやすい要約とは何か？という問題に注目して、より良い要約のあり方を探りたいと考えています。
        <br />
        研究以外では、Webプログラミングにも興味があります。フロントエンド領域を中心に、個人・インターンシップ・ハッカソンでの開発経験があります。今後は、インフラやバックエンドの分野にも、もっと取り組んでいきたいと思っています。
        <br />
        その他、趣味で競技プログラミングをしたり（AtCoder青色・Highest1761）、パソコン上で作曲（DTM)した曲をサークルのCDとしてM3（同人音楽即売会）で頒布したりしています。
      </p>
    </div>
    <div id="about">
      <h2 class="subtitle"><i class="el-icon-info" />ABOUT</h2>
      <AboutCard
        v-for="(item, index) in abouts"
        :key="index"
        :title="item.title"
        :text="item.text"
        :icon="item.icon"
      />
    </div>

    <div id="experience">
      <h2 class="subtitle"><i class="el-icon-s-data" />EXPERIENCE</h2>
      <el-timeline>
        <el-timeline-item
          class="timeline"
          v-for="(item, index) in experiences"
          :key="index"
          :icon="item.icon"
          :type="item.type"
          :color="item.color"
          :size="item.size"
          :timestamp="item.timestamp"
          :image="item.image"
          placement="top"
        >
          <div class="experience-card">
            <img
              class="experience-image"
              :src="require(`@/assets/${item.image}`)"
            />
            <div class="experience-content">
              <div class="experience-title">
                {{ item.title }}
              </div>
              <div class="experience-text">
                {{ item.text }}
              </div>
            </div>
          </div>
        </el-timeline-item>
      </el-timeline>
    </div>

    <div id="skill">
      <h2 class="subtitle"><i class="el-icon-s-opportunity" />SKILL</h2>
      <SkillCard
        v-for="(item, index) in skills"
        :key="index"
        :title="item.title"
        :level="item.level"
        :text="item.text"
        :image="item.image"
      />
    </div>

    <div id="work">
      <h2 class="subtitle"><i class="el-icon-s-claim" />WORKS</h2>
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
      <h2 class="subtitle"><i class="el-icon-s-comment" />CONTACT</h2>
      <p><b>Gmail： </b>kakkeno1@gmail.com</p>
      <p><b>Twitter： </b>@Hakuba_snow</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CustomHeader from "@/components/Header.vue";
import AboutCard from "@/components/AboutCard.vue";
import SkillCard from "@/components/SkillCard.vue";
import WorkCard from "@/components/WorkCard.vue";
import experiences from "@/data/experiences.json";
import abouts from "@/data/abouts.json";
import skills from "@/data/skills.json";
import works from "@/data/works.json";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      abouts: abouts,
      experiences: experiences,
      skills: skills,
      works: works,
    };
  },
  components: { CustomHeader, AboutCard, SkillCard, WorkCard },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    },
  },
});
</script>
<style>
#home {
  overflow: hidden;
}
#top,
#experience,
#contact {
  padding: 10px 20px 30px;
  background: #fafafa;
}
#about,
#skill,
#work {
  padding: 10px 20px 30px;
}
.tab {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  background-color: white;
}
.subtitle {
  color: #333333;
  font-size: 32px;
  font-family: "Open Sans", serif;
  letter-spacing: 0.05em;
  font-weight: normal;
}
.top-title {
  font-size: 36px;
  font-family: "Open Sans", serif;
  letter-spacing: 0.05em;
  font-weight: normal;
}
.top-text {
  color: #4f4f4f;
  margin: 20px 0;
  line-height: 175%;
}
.sns-links-list {
  margin: 20px 0;
  display: flex;
  flex-wrap: warp;
  justify-content: center;
}
.top-description {
  text-align: left;
  color: #4f4f4f;
  margin: 20px 20px;
  line-height: 175%;
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
.experience-card {
  display: flex;
  justify-content: left;
  width: 100%;
  max-width: 1000px;
  margin: auto;
}

#experience .el-timeline-item__timestamp {
  text-align: left !important;
}
.experience-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.experience-content {
  max-width: 860px;
  margin: 0 0 0 40px;
}
.experience-title {
  text-align: left;
  font-size: 18px;
  font-weight: bold;
  line-height: 175%;
}
.experience-text {
  text-align: left;
  font-size: 14px;
  color: #4f4f4f;
  line-height: 175%;
}
@media screen and (max-width: 640px) {
  #experience .el-timeline {
    margin: 0 !important;
    padding: 0 !important;
  }
}
.tag {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}

@media screen and (max-width: 640px) {
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
.sns-links li a[href*="facebook.com"]::before {
  border-color: #3b5998;
  background-color: #3b5998;
  content: "\f09a";
}
.sns-links li a[href*="github.com"]::before {
  border-color: #181717;
  background-color: #181717;
  content: "\f09b";
}
.sns-links li a[href*="plus.google.com"]::before {
  border-color: #dc4e41;
  background-color: #dc4e41;
  content: "\f0d5";
}
.sns-links li a[href*="linkedin.com"]::before {
  border-color: #0077b5;
  background-color: #0077b5;
  content: "\f0e1";
}
.sns-links li a[href*="slideshare.net"]::before {
  border-color: #2d2d2d;
  background-color: #2d2d2d;
  content: "\f1e7";
}
.sns-links li a[href*="twitter.com"]::before {
  border-color: #55acee;
  background-color: #55acee;
  content: "\f099";
}
.sns-links li a[href*="youtube.com"]::before {
  border-color: #cd201f;
  background-color: #cd201f;
  content: "\f16a";
}
.sns-links li a:hover::before {
  background-color: #fff;
}
.sns-links li a[href*="facebook.com"]:hover::before {
  color: #3b5998;
}
.sns-links li a[href*="github.com"]:hover::before {
  color: #181717;
}
.sns-links li a[href*="plus.google.com"]:hover::before {
  color: #dc4e41;
}
.sns-links li a[href*="linkedin.com"]:hover::before {
  color: #0077b5;
}
.sns-links li a[href*="slideshare.net"]:hover::before {
  color: #2d2d2d;
}
.sns-links li a[href*="twitter.com"]:hover::before {
  color: #55acee;
}
.sns-links li a[href*="youtube.com"]:hover::before {
  color: #cd201f;
}
</style>
