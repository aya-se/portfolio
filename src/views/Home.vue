<template>
  <div id="home">
    <CustomHeader />
    <div id="top">
      <h1 class="top-title">KAKERU HATTORI</h1>
      <div class="top-text">
        東京工業大学<br />情報理工学院 情報工学系 学部4年<br />岡崎研究室
      </div>
      <img class="top-icon" src="../assets/icon.png" />
      <p class="top-description">
        岡崎研究室所属の服部と申します。
        <br />
        現在は、自然言語処理のさまざまな分野のうち、議事録をはじめとした長い文書の要約をテーマに研究を行っています。ただ要約するだけではなく、読者が真に理解しやすい要約とは何か？という問題に注目して、より良い要約のあり方を探りたいと考えています。
        <br />
        研究以外では、Webプログラミングにも興味があります。フロントエンド領域を中心に、個人開発・長期のインターンシップ・ハッカソンでの開発経験があります。今後は、インフラやバックエンドの分野にも、もっと取り組んでいきたいと思っています。
        <br />
        その他、趣味で競技プログラミングをやったり（AtCoder青色・Highest1761）、パソコン上で作曲（DTM)した曲をサークルのCDとしてM3（同人音楽即売会）で頒布したりしています。
      </p>
    </div>
    <div id="about">
      <h1><i class="el-icon-info" /> About</h1>
      <AboutCard
        v-for="(item, index) in abouts"
        :key="index"
        :title="item.title"
        :text="item.text"
        :icon="item.icon"
      />
    </div>

    <div id="account">
      <h1><i class="el-icon-menu" /> Account</h1>
      <AccountCard
        v-for="(item, index) in accounts"
        :key="index"
        :title="item.title"
        :link="item.link"
        :image="item.image"
      />
    </div>

    <div id="history">
      <h1><i class="el-icon-s-data" /> History</h1>
      <el-timeline>
        <el-timeline-item
          class="timeline"
          v-for="(item, index) in activities"
          :key="index"
          :icon="item.icon"
          :type="item.type"
          :color="item.color"
          :size="item.size"
          :timestamp="item.timestamp"
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline>
    </div>

    <div id="skill">
      <h1><i class="el-icon-s-opportunity" /> Skill</h1>
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
      <h1><i class="el-icon-s-claim" /> Work</h1>
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
      <h1><i class="el-icon-s-comment" /> Contact</h1>
      <p><b>Gmail： </b>kakkeno1@gmail.com</p>
      <p><b>Twitter： </b>@Hakuba_snow</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CustomHeader from "@/components/Header.vue";
import AboutCard from "@/components/AboutCard.vue";
import AccountCard from "@/components/AccountCard.vue";
import SkillCard from "@/components/SkillCard.vue";
import WorkCard from "@/components/WorkCard.vue";
import activities from "@/data/activities.json";
import abouts from "@/data/abouts.json";
import accounts from "@/data/accounts.json";
import skills from "@/data/skills.json";
import works from "@/data/works.json";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      abouts: abouts,
      activities: activities,
      accounts: accounts,
      skills: skills,
      works: works,
    };
  },
  components: { CustomHeader, AboutCard, AccountCard, SkillCard, WorkCard },
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
#top {
  padding: 10px 20px 30px;
  background: #fafafa;
}
.tab {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  background-color: white;
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

@media screen and (max-width: 640px) {
  .menu-item {
    width: 33.3333%;
    overflow: hidden;
  }
}
@media screen and (min-width: 640px) {
  .menu-item {
    width: 16.6666%;
    overflow: hidden;
  }
}
.link-content {
  text-decoration: none;
  color: #2c3e50;
}
.link-content:visited {
  color: #2c3e50;
}
.link-content:hover {
  color: #00acee;
}
.timeline {
  width: auto;
  height: auto;
  font-size: 20px;
  padding-top: 20px;
  margin-right: 20px;
}
.tag {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}
</style>
